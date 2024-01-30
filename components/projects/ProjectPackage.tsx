import React from 'react';

type ProjectPackageProps = React.ComponentProps<'section'> & {
	packages: SRCC_Project['packages'];
};

const ProjectPackage: React.FC<ProjectPackageProps> = ({ packages }) => {
	return <section className='mt-4'></section>;
};

export default ProjectPackage;
