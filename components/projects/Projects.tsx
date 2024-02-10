// Dependencies
import React from 'react';
import ProjectCard from './ProjectCard';

type ProjectsProps = React.ComponentProps<'section'> & {
	title: string;
	projects: Array<SRCC_Project>;
	status: SRCC_Project['status'];
};

/**
 * Renders the projects section.
 * @param {ProjectsProps} props - The props for the Projects component.
 * @param {string} props.title - The title of the projects section.
 * @param {Array<SRCC_Project>} props.projects - The projects to render.
 * @param {SRCC_Project['status']} props.status - The status of the projects.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC<ProjectsProps> = ({ title, projects, status }) => {
	return (
		<section
			id={status}
			className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'
		>
			<h2 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
				{title}
			</h2>
			<div>
				<ul className='columns-2 lg:columns-3 md:gap-4 gap-2 [&>li:not(:first-child)]:mt-4 mt-16'>
					{projects.map((project) => (
						<ProjectCard
							key={`project-item-${project._id}`}
							project={project}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
