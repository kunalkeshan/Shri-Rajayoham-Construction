// Dependencies
import type { Metadata } from 'next';
import { Palanquin } from 'next/font/google';
import { generateDefaultMetadata } from '@/lib/helper';
import './globals.css';
import GoogleAnalytics from '@/components/reusable/GoogleAnalytics';

const palanquin = Palanquin({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
	...generateDefaultMetadata(),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<GoogleAnalytics />
			<body className={palanquin.className}>{children}</body>
		</html>
	);
}
