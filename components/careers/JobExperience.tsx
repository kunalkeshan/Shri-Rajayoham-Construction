// Dependencies
import React from 'react';
import { CalendarPlus } from 'lucide-react';

type JobExperienceProps = React.ComponentProps<'section'> & {
	experience: SRCC_Career['experience'];
};

/**
 * Renders the experience required for a job.
 * @param {SRCC_Career['experience']} experience - The experience required.
 * @returns {JSX.Element} The rendered experience.
 */
const JobExperience: React.FC<JobExperienceProps> = ({ experience }) => {
	return (
		<section className='mt-8'>
			<h2 className='text-3xl md:text-4xl lg:text-5xl font-medium flex items-center'>
				<CalendarPlus className='mr-2' strokeWidth={1.5} /> Experience
			</h2>
			<p className='prose mt-4'>
				This role demands a wealth of experience, seeking individuals
				with a minimum of <strong>{experience}+ years</strong> in the
				field. Your seasoned expertise will contribute significantly to
				our team&apos;s success.
			</p>
		</section>
	);
};

export default JobExperience;
