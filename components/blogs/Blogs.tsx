import React from 'react';
import BlogCard from './BlogCard';

type BlogsProps = React.ComponentProps<'section'> & {
	posts: Array<SRCC_BlogPost>;
};

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
	return (
		<section className='mt-12 md:gap-16 grid grid-cols-1 md:grid-cols-2'>
			{posts.map((post) => (
				<BlogCard post={post} key={post._id} />
			))}
		</section>
	);
};

export default Blogs;
