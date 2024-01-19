import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const InstaCard = () => {
	return (
		<main className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
			<section className='w-full border max-w-4xl mx-auto bg-app-bg rounded p-6 md:p-16  grid grid-cols-1 place-items-center md:grid-cols-3 gap-4'>
				<div className='flex items-center gap-4'>
					<Image
						src='/assets/logo.jpg'
						alt='instagram logo'
						width={100}
						height={100}
						className='rounded-full lg:w-32'
						unoptimized
					/>
					<div className='flex flex-col gap-2 justify-center'>
						<h2 className='max-w-[12ch] text-wrap break-words md:text-lg'>
							shri_rajayoham_construction
						</h2>
						<p>52 followers</p>
						<Button className='w-fit' variant={'secondary'}>
							View profile
						</Button>
					</div>
				</div>
				<div>QR</div>
				<div className=''>
					<Image
						src='/assets/instalogo.png'
						alt='instagram'
						width={100}
						height={100}
						className='w-fit'
						unoptimized
					/>
				</div>
			</section>
		</main>
	);
};

export default InstaCard;
