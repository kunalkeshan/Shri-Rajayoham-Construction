import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ProjectCardProps = React.ComponentProps<'li'> & {
	project: SRCC_Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<li className='block rounded-lg overflow-hidden'>
			<Link href={`/projects/${project.slug}`} className='block relative'>
				<Image
					src={project?.image?.url ?? '/assets/hero/1.jpg'}
					alt={project?.image?.alt ?? project.title}
					width={100}
					height={100}
					className='w-full h-auto object-cover'
					unoptimized
				/>
				<p className='w-full absolute bottom-0 p-4 text-center text-white bg-gradient-to-b from-transparent to-black/90 font-semibold text-base md:text-lg lg:text-2xl pt-16'>
					{project.title.slice(0, 40) +
						`${project.title.length > 40 ? '...' : ''}`}
				</p>
			</Link>
		</li>
	);
};

export default ProjectCard;
