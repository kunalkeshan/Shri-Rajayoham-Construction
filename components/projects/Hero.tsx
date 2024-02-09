import { MoveDownIcon, RedoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 w-full h-full'>
			<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16'>
				<Link
					href={'#upcoming'}
					className='w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-t-lg overflow-hidden relative'>
						<Image
							src={'/assets/projects/upcoming.jpg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
							unoptimized
						/>
						<h1 className='absolute -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 w-full text-center h-fit text-white text-lg md:text-xl lg:text-3xl'>
							This could be us and your dream
						</h1>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Upcoming
					</h2>
				</Link>
				<Link
					href={'#ongoing'}
					className='w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-t-lg overflow-hidden'>
						<Image
							src={'/assets/projects/ongoing.jpg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
							unoptimized
						/>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Ongoing
					</h2>
				</Link>
				<Link
					href={'#completed'}
					className='w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-t-lg overflow-hidden'>
						<Image
							src={'/assets/projects/completed.jpg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
							unoptimized
						/>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Completed
					</h2>
				</Link>
				<Link
					href={'#sale-rent'}
					className='w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-t-lg overflow-hidden'>
						<Image
							src={'/assets/projects/sale-rent.jpg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
							unoptimized
						/>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Sale/Rent
					</h2>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
