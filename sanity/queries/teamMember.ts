import { groq } from 'next-sanity';

const TEAM_MEMBER = {
	getAll: groq`*[_type == "teamMember"]{ ..., role->, position->, "image": {"url": image.asset->url, "alt": image.alt}, "slug": slug.current } | order(role.order asc)`,
};

export default TEAM_MEMBER;
