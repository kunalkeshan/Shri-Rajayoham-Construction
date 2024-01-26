import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const PackagesPage = async () => {
	const packages = await sanityFetch<Array<SRCC_Package>>({
		query: queries.package.getAll,
	});
	return <main>PackagesPage</main>;
};

export default PackagesPage;
