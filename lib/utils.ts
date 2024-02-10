// Dependencies
import { VALIDATION_REGEX } from '@/config';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import z, { ZodObject } from 'zod';

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Formats a date using the Intl.DateTimeFormat with the specified options.
 * @param date The date to format.
 * @returns The formatted date string.
 */
export const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'long',
		timeZone: 'Asia/Kolkata',
	}).format(date);

/**
 * Returns the default form schema union.
 * If a custom schema is provided, it is combined with the default schema using a union.
 * @param schema - Optional custom schema to be combined with the default schema.
 * @returns The default form schema union.
 */
export const defaultFormSchemaUnion = (schema?: ZodObject<any>) => {
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
	if (schema instanceof ZodObject) return z.union([defaults, schema]);
	return defaults;
};
