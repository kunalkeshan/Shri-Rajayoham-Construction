import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const posts = await client.fetch(queries.post.getPaths);
	return posts;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const post = await client.fetch<SRCC_BlogPost>(
		queries.post.getIndividual,
		params
	);
	return {
		// metadataBase: new URL(SRCC_WEBSITE_URL),
		title: `${post.title} | Shri Rajayoham Construction Company`,
		description: post.description,
		openGraph: {
			title: `${post.title} | Shri Rajayoham Construction Company`,
			// url: `${SRCC_WEBSITE_URL}/blogs/${post.slug}`,
			// TODO: Add image from blog post, else add fallback from srcc thumbnail og image, same for twitter in all pages!
			description: post.description,
		},
		twitter: {
			card: 'summary_large_image',
			title: `${post.title} | Shri Rajayoham Construction Company`,
			description: post.description,
		},
	};
}

const IndividualBlogPage = async ({ params }: Props) => {
	const post = await client.fetch<SRCC_BlogPost>(
		queries.post.getIndividual,
		params
	);
	if (!post) {
		redirect('/blogs');
	}
	console.log(post);
	return <main>IndividualBlogPage</main>;
};

export default IndividualBlogPage;
