import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/reusable/SanityImage';
import { Award } from 'lucide-react';

type JobBenefitsProps = React.ComponentProps<'section'> & {
	benefits: SRCC_Career['benefits'];
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const JobBenefits: React.FC<JobBenefitsProps> = ({ benefits }) => {
	return (
		<section className='mt-8'>
			<h2 className='text-4xl font-medium flex items-center'>
				<Award className='mr-2' strokeWidth={1.5} /> Job Benefits
			</h2>
			<div className='prose mt-4'>
				<PortableText
					value={benefits}
					components={portableTextComponents}
				/>
			</div>
		</section>
	);
};

export default JobBenefits;
