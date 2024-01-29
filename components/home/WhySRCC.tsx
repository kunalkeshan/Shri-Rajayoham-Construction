import React from 'react';
import Counter from '../reusable/Counter';

const WhyUs = () => {
	const data = [
		{
			num: 7,
			title: 'Years of experience for SRCC’s Team',
		},
		{
			num: 37,
			title: 'Decades-Long Construction Mastery',
		},
		{
			num: 27,
			title: 'Ongoing Projects',
		},
		{
			num: 125,
			title: 'Staff members',
		},
		{
			num: 2,
			title: 'Years minimum warranty',
		},
	];

	const cards = [
		{
			title: 'Bank Loan & Building Approval Support',
		},
		{
			title: 'Dedicated Full Time Site Engineer',
		},
		{
			title: 'APP for Realtime Project Tracking',
		},
		{
			title: 'On-Time Handover',
		},
		{
			title: 'One Stop Solution Design + Construction + Interior',
		},
	];
	return (
		<section className='w-full'>
			<div className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
				<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
					Why{' '}
					<span className='font-medium'>
						Shri Rajayoham Construction Company
					</span>
				</h2>
				<div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-8 md:gap-16 mt-12'>
					{data.map(({ title, num }, idx) => (
						<div
							key={`why-srcc-impact-${idx}`}
							className='flex w-full max-w-xs flex-col items-center justify-center mb-auto'
						>
							<div className='text-center mt-4'>
								<h3 className='text-4xl font-bold'>
									<Counter from={0} to={num} />
								</h3>
								<p className='text-slate-500 mt-2 text-base md:text-lg'>
									{title}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-6 mt-12'>
					{cards.map(({ title }, idx) => (
						<div
							key={`wh-srcc-reason-${idx}`}
							className='flex w-full h-full max-w-xs border flex-col items-center justify-center p-4 rounded'
						>
							<div className='text-center'>
								<p className='text-slate-500 font-medium text-sm md:text-base'>
									{title}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
