import React from 'react';
import HeroCarousel from '@/components/home/HeroCarousel';
import Locations from '@/components/home/Locations';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhyUs from '@/components/home/WhySRCC';
import EnquiryStrip from '@/components/reusable/EnquiryStrip';
import InstaCard from '@/components/reusable/InstaCard';
import Testimonials from '@/components/home/Testimonials';
import Projects from '@/components/home/Projects';
import EnquiryForm from '@/components/contact/EnquiryForm';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const HomePage = async () => {
	const testimonials = await sanityFetch<Array<SRCC_Testimonial>>({
		query: queries.testimonial.getAll,
	});
	return (
		<main className='w-full min-h-screen mt-[8.5rem]'>
			<HeroCarousel />
			<Locations />
			<WhatWeDo />
			<EnquiryStrip />
			<WhyUs />
			<Projects/>
			<InstaCard />
			<EnquiryForm className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32' />
			<Testimonials testimonials={testimonials} />
		</main>
	);
};

export default HomePage;
