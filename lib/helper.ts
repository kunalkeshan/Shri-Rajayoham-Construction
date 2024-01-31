import { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

export const generateDefaultMetadata = (): Metadata => {
	const COMMONS = {
		title: 'Shri Rajayoham Construction Company',
		description:
			'Very Trustable. High Values. Complete Transparency. High Quality. Reasonable price.',
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
