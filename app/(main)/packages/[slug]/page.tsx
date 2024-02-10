import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import PackageHeader from '@/components/packages/PackageHeader';
import PackageFeatures from '@/components/packages/PackageFeatures';
import ProjectService from '@/components/projects/ProjectService';
import { generateDefaultMetadata } from '@/lib/helper';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const packages = await client.fetch(queries.package.getPaths);
	return packages;
}

const defaultMetadata = generateDefaultMetadata();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const pckg = await client.fetch<SRCC_Package>(
		queries.package.getIndividual,
		params
	);
	return {
		...defaultMetadata,
		title: `${pckg.name} | Shri Rajayoham Construction Company`,
		description: pckg.description,
		openGraph: {
			...defaultMetadata.openGraph,
			title: `${pckg.name} | Shri Rajayoham Construction Company`,
			url: `${SRCC_WEBSITE_URL}/packages/${pckg.slug}`,
			description: pckg.description,
			...(pckg?.image &&
				pckg?.image?.url && { images: [pckg.image.url] }),
		},
		twitter: {
			...defaultMetadata.twitter,
			card: 'summary_large_image',
			title: `${pckg.name} | Shri Rajayoham Construction Company`,
			description: pckg.description,
			...(pckg?.image &&
				pckg?.image?.url && { images: [pckg.image.url] }),
		},
	};
}

const IndividualPackagePage = async ({ params }: Props) => {
	const pckg = await client.fetch<SRCC_Package>(
		queries.package.getIndividual,
		params
	);
	if (!pckg) {
		redirect('/packages');
	}
	return (
		<main className='w-full mt-44 lg:mt-36'>
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32 w-full grid grid-cols-1 lg:grid-cols-3 gap-8'>
				<section className='w-full h-fit lg:sticky lg:top-40'>
					<div className='rounded-lg overflow-hidden'>
						<Image
							src={
								pckg?.image?.url ??
								'/assets/fallback/icon-grid.svg'
							}
							alt={pckg?.image?.alt ?? pckg.name}
							width={100}
							height={100}
							unoptimized
							priority
							className='w-full h-auto object-cover'
						/>
					</div>
				</section>
				<section className='w-full lg:col-span-2'>
					<PackageHeader pckg={pckg} />
					{pckg.features ? (
						<PackageFeatures features={pckg.features} />
					) : null}
					{pckg.services && pckg.services.length > 0 ? (
						<ProjectService services={pckg.services} />
					) : null}
				</section>
			</div>
		</main>
	);
};

export default IndividualPackagePage;

export const revalidate = 60;
