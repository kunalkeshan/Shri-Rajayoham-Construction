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
import { queries } from '@/sanity/queries';

const HomePage = async () => {
	const testimonials = await sanityFetch<Array<SRCC_Testimonial>>({
		query: queries.testimonial.getAll,
	});
	const services = await sanityFetch<Array<SRCC_Service>>({
		query: queries.service.getAll,
	});
	return (
		<main className='w-full min-h-screen mt-[8.5rem]'>
			<HeroCarousel />
			<Locations />
			<WhatWeDo />
			<EnquiryStrip />
			<WhyUs />
			<Projects />
			<Services services={services} />
			<InstaCard />
			<Form />
			<Testimonials testimonials={testimonials} />
		</main>
	);
};

export default HomePage;
