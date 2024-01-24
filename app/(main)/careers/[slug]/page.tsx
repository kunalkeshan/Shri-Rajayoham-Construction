import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import JobDescription from '@/components/careers/JobDescription';
import JobBenefits from '@/components/careers/JobBenefits';
import JobExperience from '@/components/careers/JobExperience';
import { Button } from '@/components/ui/button';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const careers = await client.fetch(queries.career.getPaths);
	return careers;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const career = await client.fetch<SRCC_Career>(
		queries.career.getIndividual,
		params
	);
	return {
		// metadataBase: new URL(SRCC_WEBSITE_URL),
		title: `${career.role.name} - ${career.position.name} | Shri Rajayoham Construction Company`,
		description: `Job opening for an ${career.role.name} - ${career.position.name} with experience of ${career.experience}+ years or more. Apply to join Shri Rajayoham Construction Company.`,
		openGraph: {
			title: `${career.role.name} - ${career.position.name} | Shri Rajayoham Construction Company`,
			// url: `${SRCC_WEBSITE_URL}/blogs/${career.slug}`,
			description: `Job opening for an ${career.role.name} - ${career.position.name} with experience of ${career.experience}+ years or more. Apply to join Shri Rajayoham Construction Company.`,
		},
		twitter: {
			card: 'summary_large_image',
			title: `${career.role.name} - ${career.position.name} | Shri Rajayoham Construction Company`,
			description: `Job opening for an ${career.role.name} - ${career.position.name} with experience of ${career.experience}+ years or more. Apply to join Shri Rajayoham Construction Company.`,
		},
	};
}

const IndividualCareerPage = async ({ params }: Props) => {
	const career = await client.fetch<SRCC_Career>(
		queries.career.getIndividual,
		params
	);
	if (!career) {
		redirect('/careers');
	}
	return (
		<main className='w-full mt-36 md:mt-24 p-4 md:p-16'>
			<div className='w-full max-w-4xl mx-auto'>
				<section>
					<h1 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-normal'>
						{career.role.name} -{' '}
						<span className='font-medium'>
							{career.position.name}
						</span>{' '}
						({career.location})
					</h1>
					<p className='text-sm text-blue-500 decoration-blue-500 font-medium'>
						/
						<Link href={'/careers'} className='hover:underline'>
							careers
						</Link>
						/
						<Link
							href={`/careers/${career.slug}`}
							className='hover:underline'
						>
							{career.slug}
						</Link>
					</p>
				</section>
				<section className=''>
					<JobDescription description={career.description} />
					{career.benefits ? (
						<JobBenefits benefits={career.benefits} />
					) : null}
					<JobExperience experience={career.experience} />
					<Button
						className='col-span-3 w-full lg:w-fit ml-auto py-6 px-8 bg-app hover:bg-app/90 transition-all duration-300 mt-8'
						asChild
					>
						<Link href={career.applicationFormLink} target='_blank'>
							Apply now
						</Link>
					</Button>
				</section>
			</div>
		</main>
	);
};

export default IndividualCareerPage;
