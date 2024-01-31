import type { Metadata } from 'next';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';
import QueryModalProvider from '@/context/QueryModalContext';
import QueryDialog from '@/components/reusable/QueryDialog';
import { generateDefaultMetadata } from '@/lib/helper';

export const metadata: Metadata = {
	...generateDefaultMetadata(),
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
