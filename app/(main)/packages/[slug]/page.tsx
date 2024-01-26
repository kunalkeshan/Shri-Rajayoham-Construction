import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const packages = await client.fetch(queries.package.getPaths);
	return packages;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const pckg = await client.fetch<SRCC_Package>(
		queries.package.getIndividual,
		params
	);
	return {
		// metadataBase: new URL(SRCC_WEBSITE_URL),
		title: `${pckg.name} | Shri Rajayoham Construction Company`,
		description: pckg.description,
		openGraph: {
			title: `${pckg.name} | Shri Rajayoham Construction Company`,
			// url: `${SRCC_WEBSITE_URL}/blogs/${pckg.slug}`,
			// TODO: Add image from blog pckg, else add fallback from srcc thumbnail og image, same for twitter in all pages!
			description: pckg.description,
		},
		twitter: {
			card: 'summary_large_image',
			title: `${pckg.name} | Shri Rajayoham Construction Company`,
			description: pckg.description,
		},
	};
}

const IndividualPackagePage = async ({ params }: Props) => {
	const pckg = await client.fetch<SRCC_Package>(
		queries.package.getIndividual,
		params
	);
	if (!pckg) {
		redirect('/packages');
	}
	console.log(pckg);
	return <main>IndividualPackagePage</main>;
};

export default IndividualPackagePage;
