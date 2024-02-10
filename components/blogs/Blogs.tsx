// Dependencies
import React from 'react';
import BlogCard from './BlogCard';
import { cn } from '@/lib/utils';

type BlogsProps = React.ComponentProps<'section'> & {
	posts: Array<SRCC_BlogPost>;
};

/**
 * Renders a section with blog posts.
 * @param {Array<SRCC_BlogPost>} posts - The blog posts.
 * @returns {JSX.Element} The rendered section.
 */
const Blogs: React.FC<BlogsProps> = ({ posts, className, ...props }) => {
	return (
		<section
			className={cn('mt-12 md:gap-16 grid grid-cols-1 gap-6', className)}
			{...props}
		>
			{posts.map((post) => (
				<BlogCard post={post} key={post._id} />
			))}
		</section>
	);
};

export default Blogs;
