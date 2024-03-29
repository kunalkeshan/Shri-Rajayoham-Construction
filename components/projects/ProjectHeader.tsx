// Dependencies
import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
	CalendarClock,
	IndianRupee,
	Map,
	MapPin,
	PercentCircle,
	Phone,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProjectHeaderProps = React.ComponentProps<'section'> & {
	project: SRCC_Project;
};

/**
 * Renders the header of a project.
 * @param {ProjectHeaderProps} props - The props for the ProjectHeader component.
 * @param {SRCC_Project} props.project - The project data.
 * @returns {JSX.Element} The rendered ProjectHeader component.
 */
const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
	return (
		<section>
			<h1 className='text-2xl md:text-4xl font-semibold w-full'>
				{project.title}
			</h1>
			<h2 className='text-lg md:text-xl mt-4 w-full'>
				{project.description}
			</h2>
			<div className='mt-2 flex items-center gap-6 flex-wrap'>
				<Badge
					variant='outline'
					className='capitalize lg:text-base font-medium'
				>
					Status : <b className='ml-1'>{project.status}</b>
				</Badge>
				{project.status === 'completed' && project.postStatus ? (
					<Badge
						variant='outline'
						className='capitalize lg:text-base font-medium'
					>
						Availability :{' '}
						<b className='ml-1'>{project.postStatus}</b>
					</Badge>
				) : null}
				{project.duration ? (
					<Badge
						variant='outline'
						className='capitalize lg:text-base font-medium'
					>
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
					<Badge
						variant='outline'
						className='capitalize lg:text-base font-medium'
					>
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
								}).format(project.budget)}
							</b>
						</span>
					</Badge>
				) : null}
				{(project.status === 'sale' || project.status === 'rent') &&
				project?.appreciationPrediction ? (
					<Badge
						variant='outline'
						className='capitalize lg:text-base font-medium'
					>
						<PercentCircle
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>
							Appreciation Prediction:{' '}
							<b className='lowercase'>
								{project.appreciationPrediction}%
							</b>
						</span>
					</Badge>
				) : null}
				{(project.status === 'sale' || project.status === 'rent') &&
				project?.contactNumber ? (
					<Badge
						variant='outline'
						className='capitalize lg:text-base font-medium'
					>
						<Phone
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>
							Contact Number:{' '}
							<b className='lowercase'>{project.contactNumber}</b>
						</span>
					</Badge>
				) : null}
			</div>
			<div
				className={cn(
					'w-full',
					project.status === 'sale' || project.status === 'rent'
						? 'mt-4'
						: ''
				)}
			>
				{(project.status === 'sale' || project.status === 'rent') &&
				project?.address ? (
					<p className='flex items-center lg:text-base font-medium mt-2'>
						<Map
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>{project.address}</span>
					</p>
				) : null}
				{(project.status === 'sale' || project.status === 'rent') &&
				project?.locationURL ? (
					<Link
						href={project.locationURL}
						target='_blank'
						className='w-fit flex items-center lg:text-base font-medium mt-2 underline hover:text-blue-500 transition-all duration-300'
					>
						<MapPin
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>{project.locationURL}</span>
					</Link>
				) : null}
			</div>
		</section>
	);
};

export default ProjectHeader;
