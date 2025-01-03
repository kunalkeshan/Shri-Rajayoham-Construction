// Dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconFromSVGString from '../reusable/SVGFromString';
import { BadgeCheckIcon, IndianRupeeIcon } from 'lucide-react';
import { urlForImage } from '@/sanity/lib/image';

type PackageCardProps = React.ComponentProps<'a'> & {
	pckg: SRCC_Package;
};

/**
 * Renders a card with package details.
 * @param {SRCC_Package} pckg - The package details.
 * @returns {JSX.Element} The rendered card.
 */
const PackageCard: React.FC<PackageCardProps> = ({ pckg }) => {
	return (
		<Link
			prefetch={false}
			href={`/packages/${pckg.slug}`}
			className='w-full rounded-lg border flex flex-col gap-6 group'
		>
			<div className='rounded-t-lg min-h-2/5 overflow-hidden'>
				<Image
					src={
						pckg.imageData
							? urlForImage(pckg.imageData)
							: '/assets/fallback/icon-grid.svg'
					}
					alt={pckg.image?.alt ?? '/assets/fallback/icon-grid.svg'}
					width={100}
					height={100}
					className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300'
					loading='lazy'
				/>
			</div>
			<div className='flex h-3/5 flex-col items-center justify-between gap-4 text-center p-4'>
				<h3 className='text-2xl font-semibold text-center'>
					{pckg.name}
				</h3>
				<p className='text-4xl font-bold flex items-center'>
					<IndianRupeeIcon />
					{pckg.price}{' '}
					<sub className='text-lg font-medium'>/ Per Sq. Feet</sub>
				</p>
				<p className='text-justify'>{pckg.description}</p>
				<div className='mt-auto'>
					{pckg.services?.map((service) => (
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
		</Link>
	);
};

export default PackageCard;
