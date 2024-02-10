// Dependencies
import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/reusable/SanityImage';

type PackageFeaturesProps = React.ComponentProps<'section'> & {
	features: SRCC_Package['features'];
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

/**
 * Renders the features of a package.
 * @param {SRCC_Package['features']} features - The features of the package.
 * @returns {JSX.Element} The rendered features.
 */
const PackageFeatures: React.FC<PackageFeaturesProps> = ({ features }) => {
	return (
		<section className='mt-8 prose max-w-5xl mx-auto'>
			<PortableText
				value={features}
				components={portableTextComponents}
			/>
		</section>
	);
};

export default PackageFeatures;
