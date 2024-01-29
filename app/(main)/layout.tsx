import type { Metadata } from 'next';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import QueryModalProvider from '@/context/QueryModalContext';
import QueryDialog from '@/components/reusable/QueryDialog';

export const metadata: Metadata = {
	title: 'Shri Rajayoham Construction Company',
	description:
		'Very Trustable.High Values.Complete Transparency. High Quality. Reasonable price',
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
