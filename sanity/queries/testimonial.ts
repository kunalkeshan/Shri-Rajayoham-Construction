// Dependencies
import { groq } from 'next-sanity';

const TESTIMONIAL = {
	getAll: groq`*[_type == "testimonial"]{ ... }`,
};

export default TESTIMONIAL;
