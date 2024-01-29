import { VALIDATION_REGEX } from '@/config';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import z, { Schema } from 'zod';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'long',
		timeZone: 'Asia/Kolkata',
	}).format(date);

export const defaultFormSchemaUnion = (schema: Schema) => {
	const defaults = z.object({
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
	return z.union([defaults, schema]);
};
