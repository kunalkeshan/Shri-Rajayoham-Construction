import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/reusable/SanityImage';
import { Info } from 'lucide-react';

type BlogBodyProps = React.ComponentProps<'section'> & {
	body: SRCC_BlogPost['body'];
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const BlogBody: React.FC<BlogBodyProps> = ({ body }) => {
	return (
		<section className='mt-8 prose max-w-5xl mx-auto'>
			<PortableText value={body} components={portableTextComponents} />
		</section>
	);
};

export default BlogBody;
