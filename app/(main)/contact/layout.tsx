import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'Contact | Shri Rajayoham Construction Company',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'Contact | Shri Rajayoham Construction Company',
		url: `${SRCC_WEBSITE_URL}/contact`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'Contact | Shri Rajayoham Construction Company',
	},
};

export default function ContactPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
