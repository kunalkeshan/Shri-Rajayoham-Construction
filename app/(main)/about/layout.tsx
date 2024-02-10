// Dependencies
import type { Metadata } from 'next';
import { generateDefaultMetadata } from '@/lib/helper';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

const defaultMetadata = generateDefaultMetadata();

export const metadata: Metadata = {
	...defaultMetadata,
	title: 'About | Shri Rajayoham Construction Company',
	description:
		'A realm where innovation intersects architecture, electrical prowess energizes spaces, civil engineering forms the bedrock, plumbing ensures comfort, environmental solutions weave sustainability, structural excellence provides strength, and interior design adds the finishing touch.',
	openGraph: {
		...defaultMetadata.openGraph,
		title: 'About | Shri Rajayoham Construction Company',
		description: `A realm where innovation intersects architecture, electrical prowess energizes spaces, civil engineering forms the bedrock, plumbing ensures comfort, environmental solutions weave sustainability, structural excellence provides strength, and interior design adds the finishing touch.`,
		url: `${SRCC_WEBSITE_URL}/about`,
	},
	twitter: {
		...defaultMetadata.twitter,
		title: 'About | Shri Rajayoham Construction Company',
		description: `A realm where innovation intersects architecture, electrical prowess energizes spaces, civil engineering forms the bedrock, plumbing ensures comfort, environmental solutions weave sustainability, structural excellence provides strength, and interior design adds the finishing touch.`,
	},
};

export default function AboutPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
