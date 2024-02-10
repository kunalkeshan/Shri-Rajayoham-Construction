// Dependencies
import React from 'react';
import Counter from '../reusable/Counter';

type WhyUsProps = React.ComponentProps<'section'> & {
	impacts: Array<SRCC_Impact>;
};

/**
 * Renders a section with the reasons to choose SRCC.
 * @param {Array<SRCC_Impact>} impacts - The impacts of choosing SRCC.
 * @returns {JSX.Element} The rendered section.
 */
const WhyUs: React.FC<WhyUsProps> = ({ impacts }) => {
	const cards = [
		{
			title: 'Real estate and approval supports',
		},
		{
			title: 'Dedicated Full Time Site Engineer',
		},
		{
			title: 'Financing and easy project tracking',
		},
		{
			title: 'Budget friendly and timely handover',
		},
		{
			title: 'One Stop Solution Design + Construction + Interior',
		},
	];
	return (
		<section className='w-full'>
			<div className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
					Why{' '}
					<span className='font-medium'>
						Shri Rajayoham Construction Company
					</span>
				</h1>
				<div className='grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-8 md:gap-16 mt-12'>
					{impacts.map((impact) => (
						<div
							key={`why-srcc-impact-${impact._id}`}
							className='flex w-full max-w-xs flex-col items-center justify-center mb-auto'
						>
							<div className='text-center mt-4'>
								<p className='text-4xl font-bold'>
									<Counter from={0} to={impact.count} />
								</p>
								<h2 className='text-slate-500 mt-2 text-base md:text-lg'>
									{impact.title}
								</h2>
							</div>
						</div>
					))}
				</div>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-6 mt-12'>
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
