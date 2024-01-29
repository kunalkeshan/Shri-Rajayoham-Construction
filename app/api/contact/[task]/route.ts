import { VALIDATION_REGEX } from '@/config';
import { ApiError } from '@/lib/apiError';
import z, { Schema } from 'zod';

type TaskType =
	| 'enquiry'
	| 'investor-relations'
	| 'supplier-vendor'
	| 'services-required'
	| 'careers';

const TASKS: TaskType[] = [
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
});

const serviceRequiredSchema = z.union([
	commonSchema,
	z.object({
		address: z.string().min(3, {
			message: 'Address should be at least 3 characters long.',
		}),
	}),
]);

function isValidSchema(task: TaskType, data: any) {
	let parsed;
	if (task.includes('services-required')) {
		parsed = serviceRequiredSchema.safeParse(data);
	} else {
		parsed = commonSchema.safeParse(data);
	}
	if (!parsed.success)
		throw new ApiError({
			statusCode: 400,
			message: 'contact/invalid-body-content',
			data: { ...parsed.error },
		});
	return parsed;
}

export async function POST(
	request: Request,
	{ params }: { params: { task: TaskType } }
) {
	try {
		if (!params.task || !TASKS.includes(params.task))
			throw new ApiError({
				statusCode: 400,
				message: 'contact/invalid-task',
			});
		const body = await request.json();
		switch (params.task) {
			case 'enquiry': {
				const data = isValidSchema(params.task, body);
				console.log(data);
				return Response.json(
					{ message: `${params.task} form mail sent successfully.` },
					{ status: 201, statusText: 'OK' }
				);
			}
			case 'investor-relations': {
				const data = isValidSchema(params.task, body);
				console.log(data);
				return Response.json(
					{ message: `${params.task} form mail sent successfully.` },
					{ status: 201, statusText: 'OK' }
				);
			}
			case 'supplier-vendor': {
				const data = isValidSchema(params.task, body);
				console.log(data);
				return Response.json(
					{ message: `${params.task} form mail sent successfully.` },
					{ status: 201, statusText: 'OK' }
				);
			}
			case 'services-required': {
				const data = isValidSchema(params.task, body);
				console.log(data);
				return Response.json(
					{ message: `${params.task} form mail sent successfully.` },
					{ status: 201, statusText: 'OK' }
				);
			}
			case 'careers': {
				const data = isValidSchema(params.task, body);
				console.log(data);
				return Response.json(
					{ message: `${params.task} form mail sent successfully.` },
					{ status: 201, statusText: 'OK' }
				);
			}
			default: {
				throw new ApiError({
					statusCode: 400,
					message: 'contact/invalid-task',
				});
			}
		}
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
