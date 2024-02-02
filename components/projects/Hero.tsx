import { MoveDownIcon, RedoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:pb-32 w-full h-full'>
			<div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16'>
				<div className='hidden lg:flex col-span-1 w-full h-full items-center justify-center'>
					<MoveDownIcon size={96} className='lg:hidden' />
					<RedoIcon
						size={96}
						className='hidden lg:block -rotate-[36deg]'
					/>
				</div>
				<Link
					href={'#upcoming'}
					className='col-span-1 w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-lg overflow-hidden'>
						<Image
							src={'/assets/fallback/icon-grid.svg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
						/>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Upcoming
					</h2>
				</Link>
				<div className='col-span-1 w-full h-full flex items-center justify-center'>
					<MoveDownIcon size={96} className='lg:hidden' />
					<RedoIcon
						size={96}
						className='hidden lg:block rotate-[54deg]'
					/>
				</div>
				<Link
					href={'#ongoing'}
					className='col-span-1 w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-lg overflow-hidden'>
						<Image
							src={'/assets/fallback/icon-grid.svg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
						/>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Ongoing
					</h2>
				</Link>
				<div className='col-span-1 w-full h-full flex items-center justify-center'>
					<MoveDownIcon size={96} className='lg:rotate-90' />
				</div>
				<Link
					href={'#completed'}
					className='col-span-1 w-full group hover:bg-app-bg transition-all duration-300 rounded-lg'
				>
					<div className='w-full rounded-lg overflow-hidden'>
						<Image
							src={'/assets/fallback/icon-grid.svg'}
							alt=''
							className='w-full group-hover:scale-105 transition-all duration-300'
							width={100}
							height={100}
						/>
					</div>
					<h2 className='text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4 underline pb-4'>
						Completed
					</h2>
				</Link>
			</div>
		</section>
	);
};

export default Hero;
