import React from 'react';
import Image from 'next/image';

const Company = () => {
	return (
		<section className='w-full bg-app-bg'>
			<div className='w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
				<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-app text-center'>
					About the company
				</h1>
				<div className='max-w-[10rem] mx-auto mt-4'>
					<Image
						src='/assets/logo.jpg'
						alt='Shri Rajayogam Construction Company'
						width={100}
						height={100}
						className='w-full h-auto object-cover'
						unoptimized
					/>
				</div>
				<p className='mt-4 text-justify text-slate-800 text-base md:text-lg'>
					Shri Rajayoham Construction Company is a realm where
					innovation intersects architecture, electrical prowess
					energizes spaces, civil engineering forms the bedrock,
					plumbing ensures comfort, environmental solutions weave
					sustainability, structural excellence provides strength, and
					interior design adds the finishing touch. At Shri Rajayogam
					Construction Company, we are your partners in crafting
					extraordinary spaces that encapsulate your dreams. Embark on
					a journey of construction and design with Shri Rajayogam
					Construction Company. Let&apos;s weave your dreams into
					reality. Reach out to us today to begin your project.
				</p>
			</div>
		</section>
	);
};

export default Company;
