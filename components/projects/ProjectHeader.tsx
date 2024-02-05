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
				<Badge
					variant='outline'
					className='capitalize lg:text-base font-medium'
				>
					Listing : <b className='ml-1'>{project.listing}</b>
				</Badge>
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
				{project.listing !== 'closed' &&
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
				{project.listing !== 'closed' && project?.contactNumber ? (
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
					project.listing !== 'closed' ? 'mt-4' : ''
				)}
			>
				{project.listing !== 'closed' && project?.address ? (
					<p className='flex items-center lg:text-base font-medium mt-2'>
						<Map
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>{project.address}</span>
					</p>
				) : null}
				{project.listing !== 'closed' && project?.locationURL ? (
					<Link
						href={project.locationURL}
						target='_blank'
						className='flex items-center lg:text-base font-medium mt-2 underline hover:text-blue-500 transition-all duration-300'
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
