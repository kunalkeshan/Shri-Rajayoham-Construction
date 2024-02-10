// Dependencies
import 'server-only';
import type { FilteredResponseQueryOptions, QueryParams } from 'next-sanity';
import { draftMode } from 'next/headers';
import { client } from '@/sanity/lib/client';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];
const FETCH_OPTIONS = {
	revalidate: 30,
} as FilteredResponseQueryOptions & NextFetchRequestConfig;

export const token = process.env.SANITY_API_READ_TOKEN;

/**
 * Fetches data from the Sanity API using the specified query and parameters.
 *
 * @param query - The query string to fetch data from the Sanity API.
 * @param params - The query parameters to be included in the request.
 * @param tags - The tags to be included in the request.
 * @param options - Additional options for the request.
 * @returns A promise that resolves to the response data.
 * @throws An error if the `SANITY_API_READ_TOKEN` environment variable is required but not provided in draft mode.
 */
export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
	options = FETCH_OPTIONS,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
	options?: FilteredResponseQueryOptions & NextFetchRequestConfig;
}): Promise<QueryResponse> {
	const isDraftMode = draftMode().isEnabled;
	if (isDraftMode && !token) {
		throw new Error(
			'The `SANITY_API_READ_TOKEN` environment variable is required.'
		);
	}

	return client
		.withConfig({ useCdn: true })
		.fetch<QueryResponse>(query, params, {
			...(options.cache && {
				cache: options.cache,
			}),
			...(isDraftMode && {
				token: token,
				perspective: 'previewDrafts',
			}),
			next: {
				revalidate: options.revalidate,
				tags,
			},
		});
}
