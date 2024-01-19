import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';
import FAQs from '@/components/contact/FAQs';

const ContactPage = async () => {
	const faqs = await sanityFetch<Array<SRCC_FAQ>>({
		query: queries.faq.getAllByAscOrder,
	});
	return (
		<main>
			<FAQs faqs={faqs} />
		</main>
	);
};

export default ContactPage;
