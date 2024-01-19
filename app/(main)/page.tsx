import React from 'react';
import HeroCarousel from '@/components/home/HeroCarousel';
import Locations from '@/components/home/Locations';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhyUs from '@/components/home/WhyUs';
import EnquiryStrip from '@/components/reusable/EnquiryStrip';
import InstaCard from '@/components/reusable/InstaCard';
import Testimonials from '@/components/home/Testimonials';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const HomePage = async () => {
	const testimonials = await sanityFetch<Array<SRCC_Testimonial>>({
		query: queries.testimonial.getAll,
	});
	return (
		<main className='w-full h-[calc(100vh-8.5rem)] mt-[8.5rem]'>
			<HeroCarousel />
			<Locations />
			<WhatWeDo />
			<EnquiryStrip />
			<WhyUs />
			<InstaCard />
			<Testimonials testimonials={testimonials} />
		</main>
	);
};

export default HomePage;
