import React from 'react';

type ProjectTestimonialProps = React.ComponentProps<'section'> & {
	testimonials: SRCC_Project['testimonials'];
};

const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({
	testimonials,
}) => {
	return <section className='mt-4'></section>;
};

export default ProjectTestimonial;
