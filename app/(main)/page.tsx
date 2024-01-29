import React from 'react';
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
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
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
	console.log(projects);
	return (
		<main className='w-full min-h-screen mt-[8.5rem]'>
			<HeroCarousel />
			<WhyUs />
			<WhatWeDo />
			<EnquiryStrip />
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
