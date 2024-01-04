// Dependencies
import { groq } from 'next-sanity';

const FAQ = {
	getAllByAscOrder: groq`*[_type == "faq"]{ ... } | order(order asc)`,
};

export default FAQ;
