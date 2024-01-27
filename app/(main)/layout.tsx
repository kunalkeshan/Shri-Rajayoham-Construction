import type { Metadata } from 'next';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

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
		<TooltipProvider>
			<Navbar />
			{children}
			<Footer />
			<Toaster />
		</TooltipProvider>
	);
}
