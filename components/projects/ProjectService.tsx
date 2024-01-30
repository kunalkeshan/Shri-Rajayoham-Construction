import React from 'react';

type ProjectServiceProps = React.ComponentProps<'section'> & {
	services: SRCC_Project['services'];
};

const ProjectService: React.FC<ProjectServiceProps> = ({ services }) => {
	return <section className='mt-4'></section>;
};

export default ProjectService;
