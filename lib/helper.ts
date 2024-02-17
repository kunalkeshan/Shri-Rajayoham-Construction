// Dependencies
import { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

/**
 * Generates the default metadata for the Shri Rajayoham Construction Company website.
 * @returns The default metadata object.
 */
export const generateDefaultMetadata = (): Metadata => {
	const COMMONS = {
		title: 'Shri Rajayoham Construction Company - High Quality Construction Company',
		description:
			'Experience quality craftsmanship & innovative design. High quality reasonable price for residential buildings, & commercial constructions. Civil contractors, building contractors, developers & realtors near me..',
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
