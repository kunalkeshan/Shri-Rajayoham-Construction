import React from 'react';
import Hero from '@/components/projects/Hero';
import MapsEmbed from '@/components/projects/MapsEmbed';
import Projects from '@/components/projects/Projects';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

// Function to sort projects by status
const groupProjectsByStatus = (
	projects: SRCC_Project[]
): Record<SRCC_Project['status'], SRCC_Project[]> => {
	return projects.reduce((grouped, project) => {
		const { status } = project;

		if (!grouped[status]) {
			grouped[status] = [];
		}

		grouped[status].push(project);
		return grouped;
	}, {} as Record<SRCC_Project['status'], SRCC_Project[]>);
};

const ProjectsPage = async () => {
	const projects = await sanityFetch<Array<SRCC_Project>>({
		query: queries.project.getAll,
	});
	const groupedProjects = groupProjectsByStatus(projects);
	return (
		<main className='w-full min-h-screen mt-44 lg:mt-36'>
			<Hero />
			<MapsEmbed />
			{(
				Object.keys(groupedProjects) as Array<SRCC_Project['status']>
			).map((status) => (
				<Projects
					key={`project-${status}`}
					title={`${
						status === 'sale-rent' ? 'Sale/Rent' : status
					} projects`}
					projects={groupedProjects[status]}
					status={status}
				/>
			))}
		</main>
	);
};

export default ProjectsPage;

export const revalidate = 60;
