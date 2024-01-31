import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import { MetadataRoute } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

type Params = { params: { slug: string } };

const DEFAULT_SITEMAPS: MetadataRoute.Sitemap = [
	{
		url: `${SRCC_WEBSITE_URL}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 1,
	},
	{
		url: `${SRCC_WEBSITE_URL}/about`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${SRCC_WEBSITE_URL}/packages`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${SRCC_WEBSITE_URL}/projects`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${SRCC_WEBSITE_URL}/blogs`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${SRCC_WEBSITE_URL}/careers`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		url: `${SRCC_WEBSITE_URL}/contact`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
	{
		url: `${SRCC_WEBSITE_URL}/terms`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
	{
		url: `${SRCC_WEBSITE_URL}/privacy`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		const careers = await client.fetch<Array<Params>>(
			queries.career.getPaths
		);
		const careersSitemap = careers.map((event) => {
			return {
				url: `${SRCC_WEBSITE_URL}/careers/${event.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		const packages = await client.fetch<Array<Params>>(
			queries.package.getPaths
		);
		const packagesSitemap = packages.map((recruitment) => {
			return {
				url: `${SRCC_WEBSITE_URL}/packages/${recruitment.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.8,
			};
		});
		const posts = await client.fetch<Array<Params>>(queries.post.getPaths);
		const postsSitemap = posts.map((post) => {
			return {
				url: `${SRCC_WEBSITE_URL}/blogs/${post.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.8,
			};
		});
		const projects = await client.fetch<Array<Params>>(
			queries.project.getPaths
		);
		const projectsSitemap = projects.map((member) => {
			return {
				url: `${SRCC_WEBSITE_URL}/projects/${member.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		return [
			...DEFAULT_SITEMAPS,
			...careersSitemap,
			...packagesSitemap,
			...postsSitemap,
			...projectsSitemap,
		] as MetadataRoute.Sitemap;
	} catch (e) {
		return DEFAULT_SITEMAPS;
	}
}
