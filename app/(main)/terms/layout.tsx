import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

export const metadata: Metadata = {
	metadataBase: new URL(SRCC_WEBSITE_URL),
	title: 'Terms & Conditions | Shri Rajayoham Construction Company',
	description:
		"Welcome to Shri Rajayoham Construction Company's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
};

export default function TermsAndConditionsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
