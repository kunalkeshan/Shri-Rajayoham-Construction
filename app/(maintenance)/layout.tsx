// Dependencies
import type { Metadata } from 'next';
import { generateDefaultMetadata } from '@/lib/helper';

export const metadata: Metadata = {
	...generateDefaultMetadata(),
};

export default function MaintenanceLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
