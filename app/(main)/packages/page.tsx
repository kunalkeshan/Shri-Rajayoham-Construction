import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';
import PackageCard from '@/components/packages/PackageCard';
import MaterialsUsed from '@/components/packages/MaterialsUsed';

const PackagesPage = async () => {
	const packages = await sanityFetch<Array<SRCC_Package>>({
		query: queries.package.getAll,
	});
	return (
		<main className='w-full mt-[8.5rem] p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
			<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
				{packages.map((item, idx) => (
					<PackageCard pack={item} key={idx} />
				))}
			</section>
			<MaterialsUsed />
		</main>
	);
};

export default PackagesPage;
