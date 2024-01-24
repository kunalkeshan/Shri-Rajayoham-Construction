import React from 'react';
import AllForms from '@/components/contact/AllForms';
import Socials from '@/components/contact/Socials';
import FAQs from '@/components/contact/FAQs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const ContactPage = async () => {
	const faqs = await sanityFetch<Array<SRCC_FAQ>>({
		query: queries.faq.getAllByAscOrder,
	});
	const careers = await sanityFetch<Array<SRCC_Career>>({
		query: queries.career.getAll,
	});
	return (
		<main className='w-full min-h-screen mt-[8.5rem]'>
			<AllForms careers={careers} />
			<Socials />
			<FAQs faqs={faqs} />
		</main>
	);
};

export default ContactPage;
