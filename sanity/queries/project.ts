import { groq } from 'next-sanity';

const PROJECT = {
	getAll: groq`*[_type == "project"]{ ..., "slug": slug.current, "image": {"url": coverImage.asset->url, "alt": coverImage.alt}, services[]->, packages[]->{..., "slug": slug.current, "image": {"url": image.asset->url, "alt": image.alt}}, imageGallery[]{..., "image": {"url": image.asset->url, "alt": image.alt}}, testimonials[]->{..., "image": {"url": image.asset->url, "alt": image.alt}} }`,
	getAllCompleted: groq`*[_type == "project" && status == "completed"]{ ..., "slug": slug.current, "image": {"url": coverImage.asset->url, "alt": coverImage.alt}, services[]->, packages[]->{..., "slug": slug.current, "image": {"url": image.asset->url, "alt": image.alt}}, imageGallery[]{..., "image": {"url": image.asset->url, "alt": image.alt}}, testimonials[]->{..., "image": {"url": image.asset->url, "alt": image.alt}} }`,
	getPaths: groq`*[_type == "project" && defined(slug.current)][]{"params": { "slug": slug.current }}`,
	getIndividual: groq`*[_type == "project" && slug.current == $slug][0]{ ..., "slug": slug.current, "image": {"url": coverImage.asset->url, "alt": coverImage.alt}, services[]->, packages[]->{..., "slug": slug.current, "image": {"url": image.asset->url, "alt": image.alt}}, imageGallery[]{..., "image": {"url": image.asset->url, "alt": image.alt}}, testimonials[]->{..., "image": {"url": image.asset->url, "alt": image.alt}}, teamMembers[]->{..., "image": {"url": image.asset->url, "alt": image.alt}, "slug": slug.current} }`,
};

export default PROJECT;
