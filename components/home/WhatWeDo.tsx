import {
	ArrowLeftRightIcon,
	HeartHandshakeIcon,
	HourglassIcon,
	IndianRupeeIcon,
	LucideIcon,
	SearchIcon,
	ShieldCheckIcon,
	UsersRoundIcon,
} from 'lucide-react';
import React from 'react';

const WhatWeDo = () => {
	const data: { title: string; subtitle: string; Icon: LucideIcon }[] = [
		{
			title: 'Budget friendly',
			subtitle: 'Reasonable price with high quality',
			Icon: IndianRupeeIcon,
		},
		{
			title: 'Quality',
			subtitle:
				'Quality is never compromised in our construction methods',
			Icon: ShieldCheckIcon,
		},

		{
			title: 'Transparency',
			subtitle: 'A very transparent construction process throughout.',
			Icon: ArrowLeftRightIcon,
		},
		{
			title: 'Trust',
			subtitle: 'Plenty of testimonials and years of experience',
			Icon: HeartHandshakeIcon,
		},
		{
			title: 'Team',
			subtitle:
				'Highly experienced Engineers and Architects with a mix of skilled workers',
			Icon: UsersRoundIcon,
		},
		{
			title: 'Searching for land',
			subtitle: "We're good at real estate too",
			Icon: SearchIcon,
		},
		{
			title: 'Timely handover',
			subtitle:
				'Proper Time Schedule followed with the help of early planning and good time management',
			Icon: HourglassIcon,
		},
	];
	return (
		<section className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
			<h2 className='text-2xl md:text-3xl lg:text-4xl text-center text-app font-normal'>
				We got you <span className='font-medium'>covered</span>? YES !
			</h2>
			<div className='flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-12'>
				{data.map(({ title, subtitle, Icon }, idx) => (
					<div
						key={idx}
						className='flex w-full max-w-xs flex-col items-center justify-center mb-auto'
					>
						<Icon strokeWidth={1} className='w-16 h-16' />
						<div className='text-center mt-4'>
							<h3 className='text-app font-medium text-2xl'>
								{title}
							</h3>
							<p className='text-slate-500 text-base font-normal'>
								{subtitle}
							</p>
						</div>
					</div>
				))}
			</div>
			<p className='text-3xl text-center mt-8 font-normal'>
				We definitely got <span className='font-medium'>YOU</span>{' '}
				covered !
			</p>
		</section>
	);
};

export default WhatWeDo;
