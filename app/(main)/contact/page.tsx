// Dependencies
import React from "react";
import AllForms from "@/components/contact/AllForms";
import Socials from "@/components/contact/Socials";
import FAQs from "@/components/contact/FAQs";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { queries } from "@/sanity/queries";
import Location from "@/components/contact/Location";

const ContactPage = async () => {
	const faqs = await sanityFetch<Array<SRCC_FAQ>>({
		query: queries.faq.getAllByAscOrder,
	});
	const careers = await sanityFetch<Array<SRCC_Career>>({
		query: queries.career.getAll,
	});
	return (
		<main className="w-full min-h-screen mt-44 lg:mt-36">
			<AllForms careers={careers} />
			<Socials />
			<Location />
			<FAQs faqs={faqs} />
		</main>
	);
};

export default ContactPage;

export const revalidate = 60;
