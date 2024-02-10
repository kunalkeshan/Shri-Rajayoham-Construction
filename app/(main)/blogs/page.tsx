import React from 'react';
import Blogs from '@/components/blogs/Blogs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';
import LatestBlogCard from '@/components/blogs/LatestBlogCard';

const BlogsPage = async () => {
	const posts = await sanityFetch<Array<SRCC_BlogPost>>({
		query: queries.post.getAll,
	});
	const latestPosts = await sanityFetch<Array<SRCC_BlogPost>>({
		query: queries.post.getLatest,
	});
	return (
		<main className='w-full mt-[8.5rem] p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
			<h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-app font-normal'>
				Read our <span className='font-medium'>blogs</span>
			</h1>
			<div className='w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6'>
				<Blogs posts={posts} className='lg:col-span-9' />
				<section className='lg:col-span-3 w-full h-fit lg:sticky lg:top-40'>
					<h2 className='text-2xl font-semibold'>Latest Posts</h2>
					{latestPosts.map((post) => (
						<div key={`latest-post-${post._id}`}>
							<LatestBlogCard post={post} />
							<hr className='mt-2' />
						</div>
					))}
				</section>
			</div>
		</main>
	);
};

export default BlogsPage;

export const revalidate = 60;
