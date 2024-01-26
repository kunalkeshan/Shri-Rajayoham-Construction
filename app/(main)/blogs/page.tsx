import React from 'react';
import Blogs from '@/components/blogs/Blogs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { queries } from '@/sanity/queries';

const BlogsPage = async () => {
	const posts = await sanityFetch<Array<SRCC_BlogPost>>({
		query: queries.post.getAll,
	});
	return (
		<main>
			<Blogs posts={posts} />
		</main>
	);
};

export default BlogsPage;
