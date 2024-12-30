// Dependencies
import { VALIDATION_REGEX } from '@/config';
import { ApiError } from '@/lib/apiError';
import z from 'zod';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import NodeCache from 'node-cache';
import { SRCC_EMAIL } from '@/constants/srcc';

const FORWARDER_EMAIL = SRCC_EMAIL;

const TASKS: ContactFormTaskType[] = [
	'enquiry',
	'investor-relations',
	'supplier-vendor',
	'services-required',
	'careers',
];

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
	maxRequests: 3, // Maximum number of requests allowed per form
	windowMs: 3600 * 1000, // Time window in milliseconds (1 hour)
	blockDuration: 24 * 3600 * 1000, // Block duration in milliseconds (24 hours)
};

// Create separate caches for tracking requests and blocked IPs per form type
const requestTrackers: Record<ContactFormTaskType, NodeCache> = TASKS.reduce(
	(acc, task) => ({
		...acc,
		[task]: new NodeCache({ stdTTL: RATE_LIMIT_CONFIG.windowMs / 1000 }),
	}),
	{} as Record<ContactFormTaskType, NodeCache>
);

const blockedIPs: Record<ContactFormTaskType, NodeCache> = TASKS.reduce(
	(acc, task) => ({
		...acc,
		[task]: new NodeCache({
			stdTTL: RATE_LIMIT_CONFIG.blockDuration / 1000,
		}),
	}),
	{} as Record<ContactFormTaskType, NodeCache>
);

// Rate limiting helper functions
const getRateLimit = (ip: string, formType: ContactFormTaskType): number => {
	return (requestTrackers[formType].get(ip) as number) || 0;
};

const incrementRateLimit = (
	ip: string,
	formType: ContactFormTaskType
): void => {
	const current = getRateLimit(ip, formType);
	requestTrackers[formType].set(ip, current + 1);

	// If limit exceeded, add to blocked IPs for this form type
	if (current + 1 > RATE_LIMIT_CONFIG.maxRequests) {
		blockedIPs[formType].set(ip, true);
	}
};

const isIPBlocked = (ip: string, formType: ContactFormTaskType): boolean => {
	return blockedIPs[formType].has(ip);
};

const commonSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name should be at least 2 characters long.' })
		.max(20, { message: 'Name should not exceed 20 characters.' }),
	email: z.string().email({ message: 'Invalid email address.' }),
	phoneNumber: z.string().regex(VALIDATION_REGEX.phone, {
		message: 'Invalid phone number.',
	}),
	message: z
		.string()
		.min(3, {
			message: 'Message should be at least 3 characters long.',
		})
		.max(500, 'Message should not exceed 500 characters.'),
	address: z
		.string()
		.min(3, {
			message: 'Address should be at least 3 characters long.',
		})
		.optional(),
	pinCode: z
		.string()
		.regex(VALIDATION_REGEX.pinCode, 'Invalid Pin Code.')
		.optional(),
});

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.NODEMAILER_EMAIL,
		pass: process.env.NODEMAILER_PASSWORD,
	},
});

const isValidSchema = (
	task: ContactFormTaskType,
	data: z.infer<typeof commonSchema>
) => {
	const parsed = commonSchema.safeParse(data);
	if (!parsed.success)
		throw new ApiError({
			statusCode: 400,
			message: 'contact/invalid-body-content',
			data: { ...parsed.error },
		});
	return parsed.data;
};

export async function POST(
	request: Request,
	{ params }: { params: { task: ContactFormTaskType } }
) {
	try {
		if (!params.task || !TASKS.includes(params.task))
			throw new ApiError({
				statusCode: 400,
				message: 'contact/invalid-task',
			});

		// Get the user's IP address
		const userIp =
			request.headers.get('x-forwarded-for')?.split(',')[0] ||
			request.headers.get('cf-connecting-ip') ||
			request.headers.get('x-real-ip') ||
			'unknown';

		// Check if IP is blocked for this specific form
		if (isIPBlocked(userIp, params.task)) {
			throw new ApiError({
				statusCode: 429,
				message: 'contact/ip-blocked',
				data: {
					formType: params.task,
					remainingTime: blockedIPs[params.task].getTtl(userIp),
					blockDuration: RATE_LIMIT_CONFIG.blockDuration,
				},
			});
		}

		// Check rate limit for this specific form
		const currentRequests = getRateLimit(userIp, params.task);
		if (currentRequests >= RATE_LIMIT_CONFIG.maxRequests) {
			throw new ApiError({
				statusCode: 429,
				message: 'contact/rate-limit-exceeded',
				data: {
					formType: params.task,
					maxRequests: RATE_LIMIT_CONFIG.maxRequests,
					windowMs: RATE_LIMIT_CONFIG.windowMs,
				},
			});
		}

		const body = await request.json();
		let emailText: string = '';

		switch (params.task) {
			case 'enquiry': {
				const data = isValidSchema(params.task, body);
				emailText = `Name: ${data.name}\nEmail: ${
					data.email
				}\nPhone Number: ${data.phoneNumber}\nPin Code: ${
					data.pinCode || 'N/A'
				}\nQuery: ${data.message}\n\t\t\t`;
				break;
			}
			case 'investor-relations': {
				const data = isValidSchema(params.task, body);
				emailText = `Name: ${data.name}\nEmail: ${data.email}\nPhone Number: ${data.phoneNumber}\nMessage: ${data.message}`;
				break;
			}
			case 'supplier-vendor': {
				const data = isValidSchema(params.task, body);
				emailText = `\nBusiness Name: ${data.name}\nBusiness Email: ${data.email}\nBusiness Phone Number: ${data.phoneNumber}\nSupply Details: ${data.message}\n`;
				break;
			}
			case 'services-required': {
				const data = isValidSchema(params.task, body);
				emailText = `\nName: ${data.name}\nEmail: ${
					data.email
				}\nPhone Number: ${data.phoneNumber}\nAddress: ${
					data.address || 'N/A'
				}\nMessage: ${data.message}\n`;
				break;
			}
			case 'careers': {
				const data = isValidSchema(params.task, body);
				emailText = `\nName: ${data.name}\nEmail: ${data.email}\nPhone Number: ${data.phoneNumber}\nMessage: ${data.message}\n`;
				break;
			}
			default: {
				throw new ApiError({
					statusCode: 400,
					message: 'contact/invalid-task',
				});
			}
		}

		// Increment rate limit counter for this specific form after successful validation
		incrementRateLimit(userIp, params.task);

		const data = isValidSchema(params.task, body);

		const mailOptions: Mail['options'] = {
			from: process.env.NODEMAILER_EMAIL,
			to: FORWARDER_EMAIL,
			subject: `${data.name} contacting via ${params.task.replace(
				'-',
				' '
			)} form.`,
			text: emailText,
			replyTo: data.email,
		};

		await transporter.sendMail(mailOptions);

		return Response.json(
			{ message: `contact/${params.task}-email-sent-successfully` },
			{ status: 201, statusText: 'OK' }
		);
	} catch (error) {
		console.log(error);
		if (error instanceof ApiError) {
			return Response.json(
				{
					message: error.message,
					...(error.data && { data: error.data }),
				},
				{ status: error.statusCode }
			);
		} else {
			return Response.json(
				{ message: 'Internal Server Error.' },
				{ status: 500 }
			);
		}
	}
}
