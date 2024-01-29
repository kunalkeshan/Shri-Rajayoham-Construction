import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = React.ComponentProps<'li'> & {
	project: SRCC_Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<li className='block rounded-lg overflow-hidden'>
			<Link href={`/projects/${project.slug}`}>
				<Image
					src={project?.image?.url ?? '/assets/hero/1.jpg'}
					alt={project?.image?.alt ?? project.title}
					width={100}
					height={100}
					className='w-full h-auto object-cover'
					unoptimized
				/>
			</Link>
		</li>
	);
};

export default ProjectCard;
