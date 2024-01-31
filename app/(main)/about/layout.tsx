import type { Metadata } from 'next';
import { generateDefaultMetadata } from '@/lib/helper';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'About | Shri Rajayoham Construction Company',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'About | Shri Rajayoham Construction Company',
		url: `${SRCC_WEBSITE_URL}/about`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'About | Shri Rajayoham Construction Company',
	},
};

export default function AboutPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
