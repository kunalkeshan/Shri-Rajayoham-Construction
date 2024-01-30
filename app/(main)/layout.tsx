import type { Metadata } from 'next';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import QueryModalProvider from '@/context/QueryModalContext';
import QueryDialog from '@/components/reusable/QueryDialog';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

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
		<QueryModalProvider>
			<TooltipProvider>
				<Navbar />
				{children}
				<Footer />
				<Toaster />
				<QueryDialog />
			</TooltipProvider>
		</QueryModalProvider>
	);
}
