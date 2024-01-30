import React from 'react';
import IconFromSVGString from '../reusable/SVGFromString';
import { BadgeCheckIcon, Settings } from 'lucide-react';

type ProjectServiceProps = React.ComponentProps<'section'> & {
	services: SRCC_Project['services'];
};

const ProjectService: React.FC<ProjectServiceProps> = ({ services }) => {
	return (
		<section className='mt-4'>
			<h3 className='text-lg lg:text-2xl font-medium flex items-center'>
				<Settings className='mr-2' strokeWidth={1.5} /> Services
				Provided
			</h3>
			<ul className='flex items-center gap-4 flex-wrap mt-4'>
				{services!.map((service, idx) => (
					<li
						key={`${service._id}-${idx}`}
						className='flex items-center'
					>
						{service?.icon?.svg ? (
							<IconFromSVGString
								svgString={service?.icon?.svg}
								className='text-green-500'
							/>
						) : (
							<BadgeCheckIcon className='text-green-500' />
						)}
						<span className='ml-2'>{service.name}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectService;
