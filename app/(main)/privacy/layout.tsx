import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

export const metadata: Metadata = {
	metadataBase: new URL(SRCC_WEBSITE_URL),
	title: 'Privacy Policy | Shri Rajayoham Construction Company',
	description:
		'Very Trustable. High Values. Complete Transparency. High Quality. Reasonable price.',
};

export default function PrivacyPolicyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
