import React from 'react';
import Blogs from '@/components/blogs/Blogs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const BlogsPage = async () => {
	const posts = await sanityFetch<Array<SRCC_BlogPost>>({
		query: queries.post.getAll,
	});
	return (
		<main className='w-full mt-[8.5rem] p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
			<h1 className='text-2xl md:text-3xl lg:text-4xl text-center text-app font-normal'>
				Read our <span className='font-medium'>blogs</span>
			</h1>
			<Blogs posts={posts} />
		</main>
	);
};

export default BlogsPage;

export const revalidate = 60;
