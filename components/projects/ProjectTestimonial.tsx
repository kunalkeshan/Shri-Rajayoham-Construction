// Dependencies
import React from 'react';
import { Quote } from 'lucide-react';
import TestimonialCard from '../cards/TestimonialCard';

type ProjectTestimonialProps = React.ComponentProps<'section'> & {
	testimonials: SRCC_Project['testimonials'];
};

/**
 * Renders the testimonials of a project.
 * @param {ProjectTestimonialProps} props - The props for the ProjectTestimonial component.
 * @param {SRCC_Project['testimonials']} props.testimonials - The testimonials of the project.
 * @returns {JSX.Element} The rendered ProjectTestimonial component.
 */
const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({
	testimonials,
}) => {
	return (
		<section className='mt-8'>
			<h3 className='text-lg lg:text-2xl font-medium flex items-center'>
				<Quote className='mr-2' strokeWidth={1.5} /> Testimonials
			</h3>
			<ul className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
				{testimonials!.map((testimonial, idx) => (
					<TestimonialCard
						key={`${testimonial._id}-${idx}`}
						testimonial={testimonial}
					/>
				))}
			</ul>
		</section>
	);
};

export default ProjectTestimonial;
