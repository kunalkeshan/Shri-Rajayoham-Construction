import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/reusable/SanityImage';

type ProjectBodyProps = React.ComponentProps<'section'> & {
	body: SRCC_Project['body'];
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const ProjectBody: React.FC<ProjectBodyProps> = ({ body }) => {
	return (
		<section className='mt-8 prose max-w-5xl mx-auto'>
			<PortableText value={body} components={portableTextComponents} />
		</section>
	);
};

export default ProjectBody;
