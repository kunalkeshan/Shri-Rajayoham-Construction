// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Renders the projects hero section.
 * @returns {JSX.Element} The projects hero section.
 */
const Hero = () => {
	const sections = [
		{
			id: 'upcoming',
			title: 'Upcoming',
			coverImage: '/assets/projects/upcoming.jpg',
			description: 'This could be us and your dream',
		},
		{
			id: 'ongoing',
			title: 'Ongoing',
			coverImage: '/assets/projects/ongoing.jpg',
		},
		{
			id: 'completed',
			title: 'Completed',
			coverImage: '/assets/projects/completed.jpg',
		},
		{
			id: 'sale',
			title: 'Sale/Rent',
			coverImage: '/assets/projects/sale-rent.jpg',
		},
	];
	return (
		<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 w-full h-full'>
			<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16'>
				{sections.map((item) => (
					<Link
						key={`project-hero-${item.id}`}
						href={`#${item.id}`}
						className='w-full group hover:bg-app-bg transition-all duration-300 rounded-lg shadow-md hover:shadow-lg'
					>
						<div className='w-full rounded-t-lg overflow-hidden relative'>
							<Image
								src={item.coverImage}
								alt=''
								className='w-full group-hover:scale-105 transition-all duration-300'
								width={100}
								height={100}
								unoptimized
							/>
							{item?.description ? (
								<h1 className='absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 w-full text-center h-fit text-white text-lg md:text-xl lg:text-3xl'>
									{item.description}
								</h1>
							) : null}
						</div>
						<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 pb-4'>
							{item.title}
						</h2>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Hero;
