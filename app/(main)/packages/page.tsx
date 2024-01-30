import React from 'react';
import PackageCard from '@/components/packages/PackageCard';
import MaterialsUsed from '@/components/packages/MaterialsUsed';
import QuotationCalculator from "@/components/packages/QuotationCalculator";

const PackagesPage = async () => {
	const packages = await sanityFetch<Array<SRCC_Package>>({
		query: queries.package.getAll,
	});
	return (
		<main className='w-full mt-[8.5rem] p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
			<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
				{packages.map((pckg) => (
					<PackageCard pckg={pckg} key={pckg._id} />
				))}
			</section>
			<MaterialsUsed />
			<section className="rounded-lg bg-app-bg w-full">
				<div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16">
					<div className="py-12 ">
						<h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
							Online
							<span className="font-medium"> Quotation</span>
						</h2>
						<p className="text-center text-slate-500 mt-2">
							You Can Arrive Your Construction Estimate Here
						</p>
					</div>
					<QuotationCalculator />
				</div>
			</section>
		</main>
	);
};

export default PackagesPage;
