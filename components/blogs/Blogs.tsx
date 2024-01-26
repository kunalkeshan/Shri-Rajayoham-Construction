import React from 'react';

type BlogsProps = React.ComponentProps<'section'> & {
	posts: Array<SRCC_BlogPost>;
};

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
	return <section>Blogs</section>;
};

export default Blogs;
