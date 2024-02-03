import { groq } from 'next-sanity';

const PACKAGE = {
	getAll: groq`*[_type == "package"]{ ..., "slug": slug.current, "image": {"url": image.asset->url, "alt": image.alt}, services[]-> } | order(price asc)`,
	getPaths: groq`*[_type == "package" && defined(slug.current)][]{"params": { "slug": slug.current }}`,
	getIndividual: groq`*[_type == "package" && slug.current == $slug][0]{ ..., "slug": slug.current, ..., "slug": slug.current, "image": {"url": image.asset->url, "alt": image.alt}, services[]->}`,
};

export default PACKAGE;
