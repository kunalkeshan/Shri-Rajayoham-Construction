import React from 'react';
import Blogs from '../blogs/Blogs';

type FeaturedBlogsProps = React.ComponentProps<'section'> & {
	posts: Array<SRCC_BlogPost>;
};

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ posts }) => {
	return (
		<section className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
			<h2 className='text-2xl md:text-3xl lg:text-4xl text-center text-app font-normal'>
				Read our <span className='font-medium'>featured blogs</span>
			</h2>
			<Blogs posts={posts} />
		</section>
	);
};

export default FeaturedBlogs;
