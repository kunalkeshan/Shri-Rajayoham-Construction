// Dependencies
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

/**
 * Creates a Sanity client with the specified configuration options.
 * @param apiVersion The version of the Sanity API to use.
 * @param dataset The name of the dataset to use.
 * @param projectId The ID of the project to connect to.
 * @param useCdn Whether to use the Sanity CDN for faster responses.
 * @returns The created Sanity client.
 */
export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
});
