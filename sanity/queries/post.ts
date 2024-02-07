import { groq } from 'next-sanity';

const POST = {
	getAll: groq`*[_type == "post"]{ ..., "slug": slug.current, author->, "image": { "url": mainImage.asset->url, "alt": mainImage.alt}, categories[]->{..., "slug": slug.current} } | order(featured desc, publishedAt desc)`,
	getLatest: groq`*[_type == "post"][0..5]{ ..., "slug": slug.current, author->, "image": { "url": mainImage.asset->url, "alt": mainImage.alt}, categories[]->{..., "slug": slug.current} } | order(publishedAt desc)`,
	getAllFeatured: groq`*[_type == "post" && featured == true]{ ..., "slug": slug.current, author->, "image": { "url": mainImage.asset->url, "alt": mainImage.alt}, categories[]->{..., "slug": slug.current} } | order(publishedAt desc)`,
	getPaths: groq`*[_type == "post" && defined(slug.current)][]{"params": { "slug": slug.current }}`,
	getIndividual: groq`*[_type == "post" && slug.current == $slug][0]{ ..., "slug": slug.current,  author->{..., "image": {"url": image.asset->url, "alt": image.alt}, "slug": slug.current}, "image": { "url": mainImage.asset->url, "alt": mainImage.alt}, categories[]->{..., "slug": slug.current}}`,
};

export default POST;
