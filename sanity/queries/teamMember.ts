import { groq } from 'next-sanity';

const TEAM_MEMBER = {
	getAll: groq`*[_type == "teamMember"]{ ..., role->, position->, "image": {"url": image.asset->url, "alt": image.alt}, "slug": slug.current } | order(role.order asc)`,
	getPaths: groq`*[_type == "teamMember" && defined(slug.current)][]{"params": { "slug": slug.current }}`,
	getIndividual: groq`*[_type == "teamMember" && slug.current == $slug][0]{ ..., role->, position->, "image": {"url": image.asset->url, "alt": image.alt}, "slug": slug.current }`,
};

export default TEAM_MEMBER;
