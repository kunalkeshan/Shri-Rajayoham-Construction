// Dependencies
import { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

/**
 * Generates the default metadata for the Shri Rajayoham Construction Company website.
 * @returns The default metadata object.
 */
export const generateDefaultMetadata = (): Metadata => {
	const COMMONS = {
		title: 'Shri Rajayoham Construction Company',
		description: 'High Quality Construction Company.',
	};
	return {
		metadataBase: new URL(SRCC_WEBSITE_URL),
		title: COMMONS.title,
		description: COMMONS.description,
		openGraph: {
			images: ['/opengraph-image.jpg'],
			type: 'website',
			title: COMMONS.title,
			description: COMMONS.description,
			url: `${SRCC_WEBSITE_URL}`,
		},
		twitter: {
			images: ['/twitter-image.jpg'],
			title: COMMONS.title,
			description: COMMONS.description,
		},
	};
};
