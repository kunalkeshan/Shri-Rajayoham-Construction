import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'Terms & Conditions | Shri Rajayoham Construction Company',
	description:
		"Welcome to Shri Rajayoham Construction Company's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'Terms & Conditions | Shri Rajayoham Construction Company',
		description:
			"Welcome to Shri Rajayoham Construction Company's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
		url: `${SRCC_WEBSITE_URL}/terms`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'Terms & Conditions | Shri Rajayoham Construction Company',
		description:
			"Welcome to Shri Rajayoham Construction Company's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
	},
};
export default function TermsAndConditionsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
