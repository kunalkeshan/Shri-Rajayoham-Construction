// Dependencies
import { groq } from 'next-sanity';

const TESTIMONIAL = {
	getAll: groq`*[_type == "testimonial"]{ ..., "image": {"url": image.asset->url, "alt": image.alt} }`,
};

export default TESTIMONIAL;
