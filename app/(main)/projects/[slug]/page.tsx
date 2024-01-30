import React from 'react';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectBody from '@/components/projects/ProjectBody';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectService from '@/components/projects/ProjectService';
import ProjectPackage from '@/components/projects/ProjectPackage';
import ProjectTestimonial from '@/components/projects/ProjectTestimonial';
import ProjectMembers from '@/components/projects/ProjectMembers';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

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
	return (
		<main className='w-full min-h-screen mt-[8.5rem]'>
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
				<section className='w-full h-fit lg:sticky lg:top-40'>
					<div className='rounded-lg overflow-hidden'>
						<Image
							src={
								project?.image?.url ??
								'/assets/fallback/icon-grid.svg'
							}
							alt={project?.image?.alt ?? project.title}
							width={100}
							height={100}
							unoptimized
							priority
							className='w-full h-auto object-cover'
						/>
					</div>
				</section>
				<section className='w-full'>
					<ProjectHeader project={project} />
					{project.body ? <ProjectBody body={project.body} /> : null}
					{project.imageGallery && project.imageGallery.length > 0 ? (
						<ProjectGallery imageGallery={project.imageGallery} />
					) : null}
					{project.packages && project.packages.length > 0 ? (
						<ProjectPackage packages={project.packages} />
					) : null}
					{project.services && project.services.length > 0 ? (
						<ProjectService services={project.services} />
					) : null}
					{project.testimonials && project.testimonials.length > 0 ? (
						<ProjectTestimonial
							testimonials={project.testimonials}
						/>
					) : null}
					{project.teamMembers && project.teamMembers.length > 0 ? (
						<ProjectMembers teamMembers={project.teamMembers} />
					) : null}
				</section>
			</div>
		</main>
	);
};

export default IndividualProjectPage;
