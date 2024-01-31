import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'Blogs | Shri Rajayoham Construction Company',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'Blogs | Shri Rajayoham Construction Company',
		url: `${SRCC_WEBSITE_URL}/blogs`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'Blogs | Shri Rajayoham Construction Company',
	},
};

export default function BlogsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
