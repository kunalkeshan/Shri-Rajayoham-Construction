// Dependencies
import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'Privacy Policy | Shri Rajayoham Construction Company',
	description:
		'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'Privacy Policy | Shri Rajayoham Construction Company',
		description:
			'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
		url: `${SRCC_WEBSITE_URL}/privacy`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'Privacy Policy | Shri Rajayoham Construction Company',
		description:
			'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
	},
};

export default function PrivacyPolicyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
