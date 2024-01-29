import React from 'react';
import ProjectCard from './ProjectCard';

type ProjectsProps = React.ComponentProps<'section'> & {
	title: string;
	projects: Array<SRCC_Project>;
	status: SRCC_Project['status'];
};

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
