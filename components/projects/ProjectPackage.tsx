import React from 'react';
import { Package } from 'lucide-react';
import PackageCard from '../packages/PackageCard';

type ProjectPackageProps = React.ComponentProps<'section'> & {
	packages: SRCC_Project['packages'];
};

const ProjectPackage: React.FC<ProjectPackageProps> = ({ packages }) => {
	console.log(packages![0].services);
	return (
		<section className='mt-4'>
			<h3 className='text-lg lg:text-2xl font-medium flex items-center'>
				<Package className='mr-2' strokeWidth={1.5} /> Packages
			</h3>
			<section className='grid grid-cols-1 gap-6 w-full mt-4'>
				{packages!.map((pckg) => (
					<PackageCard pckg={pckg} key={pckg._id} />
				))}
			</section>
		</section>
	);
};

export default ProjectPackage;
