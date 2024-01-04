import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const HomePage = async () => {
	const faqs = await sanityFetch<Array<SRCC_FAQ>>({
		query: queries.faq.getAllByAscOrder,
	});
	const testimonials = await sanityFetch<Array<SRCC_Testimonial>>({
		query: queries.testimonial.getAll,
	});
	return <div>HomePage</div>;
};

export default HomePage;
