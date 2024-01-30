import type { Metadata } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

export const metadata: Metadata = {
	metadataBase: new URL(SRCC_WEBSITE_URL),
	title: 'About | Shri Rajayoham Construction Company',
	description:
		'Very Trustable. High Values. Complete Transparency. High Quality. Reasonable price.',
};

export default function AboutPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
