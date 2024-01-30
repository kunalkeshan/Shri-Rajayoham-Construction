'use client';
import service from '@/sanity/schemas/service';
import { BadgeCheckIcon, IndianRupeeIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import IconFromSVGString from '../reusable/SVGFromString';

type PackageCardProps = React.ComponentProps<'div'> & {
	pckg: SRCC_Package;
};

const PackageCard: React.FC<PackageCardProps> = ({ pckg }) => {
	return (
		<div className='w-full rounded-lg border flex flex-col gap-6'>
			<div>
				<Image
					src={pckg.image?.url ?? '/assets/fallback/icon-grid.svg'}
					alt={pckg.image?.alt ?? '/assets/fallback/icon-grid.svg'}
					width={100}
					height={100}
					className='w-full rounded-t-lg'
				/>
			</div>
			<div className='flex h-full flex-col items-center gap-4 text-center p-4'>
				<h3 className='text-2xl font-semibold text-center'>
					{pckg.name}
				</h3>
				<p className='text-4xl font-bold flex items-center'>
					<IndianRupeeIcon />
					{pckg.price}
				</p>
				<p className='text-justify'>{pckg.description}</p>
				<div className='w-ful mt-auto'>
					{pckg.services?.map((service, idx) => (
						<div
							key={`${pckg._id}-service-${service._id}`}
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
							<p className='ml-2'>{service.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
