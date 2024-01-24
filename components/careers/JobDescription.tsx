import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/reusable/SanityImage';
import { Info } from 'lucide-react';

type JobDescriptionProps = React.ComponentProps<'section'> & {
	description: SRCC_Career['description'];
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const JobDescription: React.FC<JobDescriptionProps> = ({ description }) => {
	return (
		<section className="mt-8">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium flex items-center">
				<Info className="mr-2" strokeWidth={1.5} /> Job Description
			</h2>
			<div className="prose mt-4">
				<PortableText
					value={description}
					components={portableTextComponents}
				/>
			</div>
		</section>
	);
};

export default JobDescription;
