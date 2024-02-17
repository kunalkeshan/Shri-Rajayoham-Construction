// Dependencies
import React from 'react';
import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';
import TeamMembers from '@/components/about/TeamMembers';
import CSRAndEvents from '@/components/about/CSRAndEvents';
import Company from '@/components/about/Company';

const AboutPage = async () => {
	const teamMembers = await sanityFetch<Array<SRCC_TeamMember>>({
		query: queries.teamMember.getAll,
	});

	const csrAndEvents = await sanityFetch<Array<SRCC_CSRAndEvent>>({
		query: queries.csrAndEvent.getAll,
	});

	const data = [
		{
			title: 'Mission',
			desc: "Our Client's satisfaction is the essence of our success and as such we will continually strive to provide each and every Client with an extraordinary experience, while delivering every project on time, within budget and with the highest level of quality and professionalism.",
			img: '/assets/about/mission.jpg',
		},
		{
			title: 'Vision',
			desc: "Our vision is to continue shaping our surroundings skyline with iconic structures that blend architectural innovation, functionality, and sustainability. We aim to be the driving force behind the city's growth, creating spaces that enrich lives of beautiful families and inspire communities. At SRCC, we don't just build structures, we craft experiences that endure. Join us on this journey to transform dreams into reality, one brick at a time.",
			img: '/assets/about/vision.jpg',
		},
		{
			title: 'Brand values',
			desc: 'At SRCC , our focus is on YOU and what YOU want to achieve. We pride ourselves on forging strong, lasting relationships, which help us to continue to thrive and develop. Our desire to work closely with those who share the same vision and values is why many of our clients have a multiple project history. Exceeding client expectations has resulted in continual repeat business within the local area, which means we are building a foundation not only for our business but also for our community.',
			img: '/assets/about/brand-values.jpg',
		},
	];

	return (
		<main className='mt-44 lg:mt-36 h-full'>
			{/* <section className="bg-[url('/assets/hero/1.jpg')] bg-cover bg-no-repeat bg-center">
				<div className="bg-black bg-opacity-60 px-4 md:px-16 py-16 md:py-32">
					<h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white">
						About Us
					</h1>
				</div>
			</section> */}
			<h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-app'>
				About Us
			</h1>
			<section className='w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto lg:hidden'>
				{data.map((item, idx) => (
					<section
						key={idx}
						className='flex flex-col-reverse mt-8 lg:odd:flex-row lg:even:flex-row-reverse items-center justify-between gap-8 md:gap-16'
					>
						<div className='flex flex-col gap-4'>
							<h2 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-app font-semibold'>
								{item.title}
							</h2>
							<div className=' overflow-hidden rounded-lg'>
								<Image
									src={item.img}
									alt={item.title}
									width={100}
									height={100}
									className='w-full h-auto'
									unoptimized
								/>
							</div>
							<p className='text-justify text-base md:text-lg text-slate-500'>
								{item.desc}
							</p>
						</div>
					</section>
				))}
			</section>
			<section className='w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto hidden lg:block'>
				{data.map((item, idx) => (
					<section
						key={idx}
						className='flex flex-col-reverse lg:odd:flex-row lg:even:flex-row-reverse items-center justify-between gap-8 md:gap-16'
					>
						<div className='lg:w-1/2 overflow-hidden rounded-lg'>
							<Image
								src={item.img}
								alt={item.title}
								width={100}
								height={100}
								className='w-full h-auto'
								unoptimized
							/>
						</div>
						<div className='flex flex-col gap-4 lg:w-1/2'>
							<h2 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-app font-semibold'>
								{item.title}
							</h2>
							<p className='text-justify text-base md:text-lg text-slate-500'>
								{item.desc}
							</p>
						</div>
					</section>
				))}
			</section>
			<Company />
			<section className='w-full' id='team-members'>
				<div className='w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
					<TeamMembers teamMembers={teamMembers} />
				</div>
			</section>
			<CSRAndEvents csrAndEvents={csrAndEvents} />
		</main>
	);
};

export default AboutPage;

export const revalidate = 60;
