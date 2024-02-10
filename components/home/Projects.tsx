// Dependencies
import React from 'react';
import ProjectCard from '../projects/ProjectCard';

type ProjectsProps = React.ComponentProps<'section'> & {
	projects: Array<SRCC_Project>;
};

/**
 * Renders a section with featured projects.
 * @param {Array<SRCC_Project>} projects - The featured projects.
 * @returns {JSX.Element} The rendered section.
 */
const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	return (
		<section className='bg-app-b w-full'>
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
				<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
					Our
					<span className='font-medium'> Completed </span>
					Projects (Actual pictures)
				</h2>
				<div>
					<ul className='columns-2 lg:columns-3 md:gap-4 gap-2 [&>li:not(:first-child)]:mt-4 mt-16'>
						{projects.map((project) => (
							<ProjectCard
								key={`project-home-item-${project._id}`}
								project={project}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Projects;
