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
	type: ContactFormTaskType,
	details: z.infer<typeof FormSchema>
) => Promise<boolean>;

type ContactFormResponse = {
	message: `contact/${ContactFormTaskType}-email-sent-successfully`;
	staus: 201;
	statusText: 'OK';
};

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
