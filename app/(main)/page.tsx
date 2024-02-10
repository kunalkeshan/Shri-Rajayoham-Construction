import React from 'react';
import Image from 'next/image';
import HeroCarousel from '@/components/home/HeroCarousel';
import Locations from '@/components/home/Locations';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhyUs from '@/components/home/WhySRCC';
import EnquiryStrip from '@/components/reusable/EnquiryStrip';
import InstaCard from '@/components/reusable/InstaCard';
import Testimonials from '@/components/home/Testimonials';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Form from '@/components/home/Form';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const HomePage = async () => {
	const testimonials = await sanityFetch<Array<SRCC_Testimonial>>({
		query: queries.testimonial.getAll,
	});
	const services = await sanityFetch<Array<SRCC_Service>>({
		query: queries.service.getAll,
	});
	const posts = await sanityFetch<Array<SRCC_BlogPost>>({
		query: queries.post.getAllFeatured,
	});
	const projects = await sanityFetch<Array<SRCC_Project>>({
		query: queries.project.getAllCompleted,
	});
	const impacts = await sanityFetch<Array<SRCC_Impact>>({
		query: queries.impact.getAll,
	});
	return (
		<main className='w-full min-h-screen mt-44 lg:mt-36'>
			<HeroCarousel />
			<WhyUs impacts={impacts} />
			<WhatWeDo />
			<EnquiryStrip />
			<section className='w-full'>
				<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto pt-8 md:pt-16 lg:pt-32'>
					<div className='w-full md:max-w-lg mx-auto'>
						<Image
							src='/assets/vivered.jpg'
							alt='Vivered'
							width={100}
							height={100}
							unoptimized
							className='w-full h-auto object-cover'
						/>
					</div>
				</div>
			</section>
			<Locations />
			{projects && projects.length > 0 ? (
				<Projects projects={projects} />
			) : null}
			<Services services={services} />
			<InstaCard />
			<Form />
			{testimonials && testimonials.length > 0 ? (
				<Testimonials testimonials={testimonials} />
			) : null}
			<FeaturedBlogs posts={posts} />
		</main>
	);
};

export default HomePage;

export const revalidate = 60;
