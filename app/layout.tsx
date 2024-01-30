import type { Metadata } from 'next';
import { Palanquin } from 'next/font/google';
import './globals.css';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

const palanquin = Palanquin({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	metadataBase: new URL(SRCC_WEBSITE_URL),
	title: 'Shri Rajayoham Construction Company',
	description:
		'Very Trustable. High Values. Complete Transparency. High Quality. Reasonable price.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={palanquin.className}>{children}</body>
		</html>
	);
}
