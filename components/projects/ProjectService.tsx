// Dependencies
import React from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import IconFromSVGString from '../reusable/SVGFromString';
import { BadgeCheckIcon, Settings } from 'lucide-react';

type ProjectServiceProps = React.ComponentProps<'section'> & {
	services: SRCC_Project['services'];
};

/**
 * Renders the services of a project.
 * @param {ProjectServiceProps} props - The props for the ProjectService component.
 * @param {SRCC_Project['services']} props.services - The services of the project.
 * @returns {JSX.Element} The rendered ProjectService component.
 */
const ProjectService: React.FC<ProjectServiceProps> = ({ services }) => {
	return (
		<section className='mt-8'>
			<h3 className='text-lg lg:text-2xl font-medium flex items-center'>
				<Settings className='mr-2' strokeWidth={1.5} /> Services
				Provided
			</h3>
			<ul className='flex items-center gap-6 flex-wrap mt-4'>
				{services!.map((service, idx) => (
					<li key={`${service._id}-${idx}`}>
						<Tooltip>
							<TooltipTrigger className='flex items-center'>
								{service?.icon?.svg ? (
									<IconFromSVGString
										svgString={service?.icon?.svg}
										className='text-green-500'
									/>
								) : (
									<BadgeCheckIcon className='text-green-500' />
								)}
								<span className='ml-2'>{service.name}</span>
							</TooltipTrigger>
							<TooltipContent className='max-w-sm'>
								{service.description}
							</TooltipContent>
						</Tooltip>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectService;
