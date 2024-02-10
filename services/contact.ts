// Dependencies
import axios, { AxiosError } from 'axios';
import z from 'zod';
import { defaultFormSchemaUnion } from '@/lib/utils';

const FormSchema = defaultFormSchemaUnion(
	z.object({
		address: z
			.string()
			.min(3, {
				message: 'Address should be at least 3 characters long.',
			})
			.optional(),
	})
);

type SubmitContactFormDetailsFunc = (
	// eslint-disable-next-line no-unused-vars
	type: ContactFormTaskType,
	// eslint-disable-next-line no-unused-vars
	details: z.infer<typeof FormSchema>
) => Promise<boolean>;

type ContactFormResponse = {
	message: `contact/${ContactFormTaskType}-email-sent-successfully`;
	staus: 201;
	statusText: 'OK';
};

/**
 * Submits the contact form details to the server.
 *
 * @param type - The type of contact form.
 * @param details - The details of the contact form.
 * @returns A promise that resolves to a boolean indicating whether the form submission was successful.
 */
export const submitContactFormDetails: SubmitContactFormDetailsFunc = (
	type,
	details
) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.post<ContactFormResponse>(
				`/api/contact/${type}`,
				details
			);
			if (response.status === 201) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				reject(error);
			} else {
				resolve(false);
			}
		}
	});
};
