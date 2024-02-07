import React from 'react';
import BlogCard from './BlogCard';
import { cn } from '@/lib/utils';

type BlogsProps = React.ComponentProps<'section'> & {
	posts: Array<SRCC_BlogPost>;
};

const Blogs: React.FC<BlogsProps> = ({ posts, className, ...props }) => {
	return (
		<section
			className={cn('mt-12 md:gap-16 grid grid-cols-1', className)}
			{...props}
		>
			{posts.map((post) => (
				<BlogCard post={post} key={post._id} />
			))}
		</section>
	);
};

export default Blogs;
