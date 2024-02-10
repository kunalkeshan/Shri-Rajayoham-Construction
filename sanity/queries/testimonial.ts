// Dependencies
import { groq } from 'next-sanity';

const TESTIMONIAL = {
	getAll: groq`*[_type == "testimonial"]{ ..., "imageAlt": {"alt": image.alt} }`,
};

export default TESTIMONIAL;
