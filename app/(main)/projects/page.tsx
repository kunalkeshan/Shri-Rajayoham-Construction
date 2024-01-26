import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const ProjectsPage = async () => {
	const projects = await sanityFetch<Array<SRCC_Project>>({
		query: queries.project.getAll,
	});
	console.log(projects);
	return <main>ProjectsPage</main>;
};

export default ProjectsPage;
