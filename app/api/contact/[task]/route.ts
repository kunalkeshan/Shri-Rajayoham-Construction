import { VALIDATION_REGEX } from '@/config';
import { ApiError } from '@/lib/apiError';
import z from 'zod';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const TASKS: ContactFormTaskType[] = [
	'enquiry',
	'investor-relations',
	'supplier-vendor',
	'services-required',
	'careers',
];

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
				emailText = `\nName: ${data.name}\nEmail: ${
					data.email
				}\nPhone Number: ${data.phoneNumber}\nAddress: ${
					data.address || 'N/A'
				}\nMessage: ${data.message}\n`;
				break;
			}
			default: {
				throw new ApiError({
					statusCode: 400,
					message: 'contact/invalid-task',
				});
			}
		}

		const mailOptions: Mail['options'] = {
			from: process.env.NODEMAILER_EMAIL,
			to: process.env.NODEMAILER_EMAIL,
			subject: `${params.task.replace('-', ' ')} form mail`,
			text: emailText,
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
