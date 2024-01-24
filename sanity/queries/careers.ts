// Dependencies
import { groq } from 'next-sanity';

const CAREER = {
	getAll: groq`*[_type == "careers"]{ ..., "slug": slug.current, position->, role-> }`,
};

export default CAREER;
