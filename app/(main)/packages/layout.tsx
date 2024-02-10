// Dependencies
import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'Packages | Shri Rajayoham Construction Company',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'Packages | Shri Rajayoham Construction Company',
		url: `${SRCC_WEBSITE_URL}/packages`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'Packages | Shri Rajayoham Construction Company',
	},
};

export default function PackagesPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
