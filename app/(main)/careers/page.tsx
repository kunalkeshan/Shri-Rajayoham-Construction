import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const CareersPage = async () => {
	const careers = await sanityFetch<Array<SRCC_Career>>({
		query: queries.career.getAll,
	});
	return (
		<main className='w-full mt-36 md:mt-24 p-4 md:p-16'>
			<div className='w-full max-w-4xl mx-auto'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-normal'>
					Open <span className='font-medium'>Positions</span>
				</h1>
				<p className='text-sm text-blue-500 decoration-blue-500 font-medium'>
					/
					<Link href={'/careers'} className='hover:underline'>
						careers
					</Link>
				</p>
				{careers && careers.length > 0 ? (
					<ul className='w-full mt-8'>
						{careers.map((career) => (
							<li key={career._id} className='w-full border-b'>
								<Link
									href={`/careers/${career.slug}`}
									className='w-full flex items-center justify-between font-medium text-lg pb-2 group'
								>
									<h2 className='group-hover:underline'>
										{career.role.name} -{' '}
										{career.position.name}
									</h2>
									<p className='text-blue-500 group-hover:underline decoration-blue-500'>
										{career.location}
									</p>
								</Link>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</main>
	);
};

export default CareersPage;
