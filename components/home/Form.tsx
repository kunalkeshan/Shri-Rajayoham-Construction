import React from 'react';
import EnquiryForm from '../contact/EnquiryForm';

const Form = () => {
	return (
		<section className='w-full bg-app-bg'>
			<div className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto pt-8 md:pt-16 lg:pt-32'>
				<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
					Still got <span className='font-medium'>questions?</span>
				</h2>
				<EnquiryForm className='mt-8 max-w-xl mx-auto shadow p-4 rounded-md bg-white' />
			</div>
		</section>
	);
};

export default Form;
