import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

export const metadata: Metadata = {
	metadataBase: new URL(SRCC_WEBSITE_URL),
	title: 'Privacy Policy | Shri Rajayoham Construction Company',
	description:
		'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
};

export default function PrivacyPolicyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
