import { groq } from 'next-sanity';

const SERVICE = {
	getAll: groq`*[_type == "service"]{ ... }`,
};

export default SERVICE;
