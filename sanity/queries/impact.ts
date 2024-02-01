// Dependencies
import { groq } from 'next-sanity';

const IMPACT = {
	getAll: groq`*[_type == "impact"]{ ... }`,
};

export default IMPACT;
