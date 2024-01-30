import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const projects = await client.fetch(queries.project.getPaths);
	return projects;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const project = await client.fetch<SRCC_Project>(
		queries.project.getIndividual,
		params
	);
	return {
		metadataBase: new URL(SRCC_WEBSITE_URL),
		title: `${project.title} | Shri Rajayoham Construction Company`,
		description: project.description,
		openGraph: {
			title: `${project.title} | Shri Rajayoham Construction Company`,
			url: `${SRCC_WEBSITE_URL}/projects/${project.slug}`,
			// TODO: Add image from blog project, else add fallback from srcc thumbnail og image, same for twitter in all pages!
			description: project.description,
		},
		twitter: {
			card: 'summary_large_image',
			title: `${project.title} | Shri Rajayoham Construction Company`,
			description: project.description,
		},
	};
}

const IndividualProjectPage = async ({ params }: Props) => {
	const project = await client.fetch<SRCC_Project>(
		queries.project.getIndividual,
		params
	);
	if (!project) {
		redirect('/projects');
	}
	console.log(project);
	return <main>IndividualProjectPage</main>;
};

export default IndividualProjectPage;
