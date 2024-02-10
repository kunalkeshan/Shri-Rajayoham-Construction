// Dependencies
import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'Projects | Shri Rajayoham Construction Company',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'Projects | Shri Rajayoham Construction Company',
		url: `${SRCC_WEBSITE_URL}/projects`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'Projects | Shri Rajayoham Construction Company',
	},
};

export default function ProjectsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
