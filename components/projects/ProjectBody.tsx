// Dependencies
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

/**
 * Renders the body of a project.
 * @param {ProjectBodyProps} props - The props for the ProjectBody component.
 * @param {SRCC_Project['body']} props.body - The body of the project.
 * @returns {JSX.Element} The rendered ProjectBody component.
 */
const ProjectBody: React.FC<ProjectBodyProps> = ({ body }) => {
	return (
		<section className='mt-8 prose max-w-5xl mx-auto'>
			<PortableText value={body} components={portableTextComponents} />
		</section>
	);
};

export default ProjectBody;
