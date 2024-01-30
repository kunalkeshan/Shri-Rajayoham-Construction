import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CalendarClock, IndianRupee } from 'lucide-react';

type ProjectHeaderProps = React.ComponentProps<'section'> & {
	project: SRCC_Project;
};

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
	return (
		<section>
			<h1 className='text-2xl md:text-4xl font-semibold w-full'>
				{project.title}
			</h1>
			<h2 className='text-lg md:text-xl mt-2 w-full'>
				{project.description}
			</h2>
			<div className='mt-2 flex items-center gap-6 flex-wrap'>
				<Badge variant='outline' className='uppercase lg:text-base'>
					Status: <b>{project.status}</b>
				</Badge>
				{project.duration ? (
					<Badge variant='outline' className='uppercase lg:text-base'>
						<CalendarClock
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>
							Duration:{' '}
							<b className='lowercase'>
								{project.duration} months
							</b>
						</span>
					</Badge>
				) : null}
				{project.budget ? (
					<Badge variant='outline' className='uppercase lg:text-base'>
						<IndianRupee
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>
							Cost:{' '}
							<b className='lowercase'>
								{new Intl.NumberFormat('en-IN', {
									style: 'currency',
									currency: 'INR',
									notation: 'compact',
								}).format(project.budget)}
							</b>
						</span>
					</Badge>
				) : null}
			</div>
		</section>
	);
};

export default ProjectHeader;
