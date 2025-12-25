import { groq } from 'next-sanity';

const PACKAGE = {
	getAll: groq`*[_type == "package"]{ ..., "slug": slug.current, "imageData": image, "image": {"url": image.asset->url, "alt": image.alt}, services[]-> } | order(price asc)`,
	getPaths: groq`*[_type == "package" && defined(slug.current)][]{"params": { "slug": slug.current }, _createdAt, _updatedAt}`,
	getIndividual: groq`*[_type == "package" && slug.current == $slug][0]{ ..., "imageData": image, "slug": slug.current, ..., "slug": slug.current, "image": {"url": image.asset->url, "alt": image.alt}, services[]->}`,
};

export default PACKAGE;
