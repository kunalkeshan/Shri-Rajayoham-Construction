// Dependencies
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { IndianRupee } from 'lucide-react';

type PackageHeaderProps = React.ComponentProps<'section'> & {
	pckg: SRCC_Package;
};

/**
 * Renders the header of a package.
 * @param {SRCC_Package} pckg - The package details.
 * @returns {JSX.Element} The rendered package header.
 */
const PackageHeader: React.FC<PackageHeaderProps> = ({ pckg }) => {
	return (
		<section>
			<h1 className='text-2xl md:text-4xl font-semibold w-full'>
				{pckg.name}
			</h1>
			<h2 className='text-lg md:text-xl mt-2 w-full'>
				{pckg.description}
			</h2>
			<div className='mt-4 flex items-center gap-6 flex-wrap'>
				{pckg.price ? (
					<Badge variant='outline' className='uppercase lg:text-base'>
						<IndianRupee
							strokeWidth={1.5}
							size={16}
							className='shrink-0 mr-2'
						/>
						<span>
							Price:{' '}
							<b className='lowercase'>
								{new Intl.NumberFormat('en-IN', {
									style: 'currency',
									currency: 'INR',
								}).format(pckg.price)}
							</b>
							<span className='text-xs normal-case'>
								/ Per Sq. Feet
							</span>
						</span>
					</Badge>
				) : null}
			</div>
		</section>
	);
};

export default PackageHeader;
