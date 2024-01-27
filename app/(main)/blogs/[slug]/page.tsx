import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { queries } from '@/sanity/queries';
import { dateFormatter } from '@/lib/utils';
import ReadTime from '@/components/blogs/ReadTime';
import BlogBody from '@/components/blogs/BlogBody';
import SocialShare from '@/components/blogs/SocialShare';

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
	return (
		<main className='mt-[8.5rem] w-full'>
			<div className='p-4 md:px-16 lg:max-w-5xl lg:mx-auto pb-8 md:pb-16 lg:pb-32 '>
				<section className='text-center'>
					<div className='w-full rounded-md overflow-hidden'>
						<Image
							src={
								post?.image?.url ??
								'/assets/fallback/icon-grid.svg'
							}
							alt={post?.image?.alt ?? post.title}
							width={100}
							height={100}
							className='w-full h-auto aspect-video'
						/>
					</div>
					<h1 className='text-2xl md:text-4xl font-semibold mt-4 max-w-[28ch] w-full mx-auto'>
						{post.title}
					</h1>
					<h2 className='text-lg md:text-xl mt-2 max-w-[56ch] w-full mx-auto'>
						{post.description}
					</h2>
					<div className='flex items-center w-full justify-evenly mt-2 flex-wrap'>
						<p>{dateFormatter(new Date(post.publishedAt))}</p>
						<p className='capitalize'>
							Written by {post.author.name}
						</p>
						<ReadTime body={post.body} />
					</div>
				</section>
				<BlogBody body={post.body} />
				<SocialShare post={post} />
			</div>
		</main>
	);
};

export default IndividualBlogPage;
