// Dependencies
import React from 'react';
import { Package } from 'lucide-react';
import PackageCard from '../packages/PackageCard';

type ProjectPackageProps = React.ComponentProps<'section'> & {
	packages: SRCC_Project['packages'];
};

/**
 * Renders the packages of a project.
 * @param {ProjectPackageProps} props - The props for the ProjectPackage component.
 * @param {SRCC_Project['packages']} props.packages - The packages of the project.
 * @returns {JSX.Element} The rendered ProjectPackage component.
 */
const ProjectPackage: React.FC<ProjectPackageProps> = ({ packages }) => {
	return (
		<section className='mt-8'>
			<h3 className='text-lg lg:text-2xl font-medium flex items-center'>
				<Package className='mr-2' strokeWidth={1.5} /> Packages
			</h3>
			<section className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-4'>
				{packages!.map((pckg) => (
					<PackageCard pckg={pckg} key={pckg._id} />
				))}
			</section>
		</section>
	);
};

export default ProjectPackage;
