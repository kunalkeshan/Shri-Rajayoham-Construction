import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import ProjectHeader from '@/components/projects/ProjectHeader';
import ProjectBody from '@/components/projects/ProjectBody';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectService from '@/components/projects/ProjectService';
import ProjectPackage from '@/components/projects/ProjectPackage';
import ProjectTestimonial from '@/components/projects/ProjectTestimonial';
// import ProjectMembers from "@/components/projects/ProjectMembers";
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { generateDefaultMetadata } from '@/lib/helper';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const projects = await client.fetch(queries.project.getPaths);
	return projects;
}

const defaultMetadata = generateDefaultMetadata();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const project = await client.fetch<SRCC_Project>(
		queries.project.getIndividual,
		params
	);
	return {
		...defaultMetadata,
		title: `${project.title} | Shri Rajayoham Construction Company`,
		description: project.description,
		openGraph: {
			...defaultMetadata.openGraph,
			title: `${project.title} | Shri Rajayoham Construction Company`,
			url: `${SRCC_WEBSITE_URL}/projects/${project.slug}`,
			description: project.description,
			...(project?.image &&
				project?.image?.url && { images: [project.image.url] }),
		},
		twitter: {
			...defaultMetadata.twitter,
			card: 'summary_large_image',
			title: `${project.title} | Shri Rajayoham Construction Company`,
			description: project.description,
			...(project?.image &&
				project?.image?.url && { images: [project.image.url] }),
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
	return (
		<main className='w-full min-h-screen mt-44 lg:mt-36'>
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32 w-full grid grid-cols-1 lg:grid-cols-3 gap-8'>
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
							loading='lazy'
							className='w-full h-auto object-cover'
						/>
					</div>
				</section>
				<section className='w-full lg:col-span-2'>
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
					{/* {project.teamMembers && project.teamMembers.length > 0 ? (
						<ProjectMembers teamMembers={project.teamMembers} />
					) : null} */}
				</section>
			</div>
		</main>
	);
};

export default IndividualProjectPage;

export const revalidate = 60;
