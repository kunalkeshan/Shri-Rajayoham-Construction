// Dependencies
import { groq } from 'next-sanity';

const CAREER = {
	getAll: groq`*[_type == "careers"]{ ..., "slug": slug.current, position->, role-> }`,
	getPaths: groq`*[_type == "careers" && defined(slug.current)][]{"params": { "slug": slug.current }}`,
	getIndividual: groq`*[_type == "careers" && slug.current == $slug][0]{ ..., "slug": slug.current, position->, role ->}`,
};

export default CAREER;
