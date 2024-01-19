import React from 'react';

type TestimonialsProps = React.ComponentProps<'section'> & {
	testimonials: Array<SRCC_Testimonial>;
};

const Testimonials: React.FC<TestimonialsProps> = () => {
	return <section>Testimonials</section>;
};

export default Testimonials;
