import React from 'react';
import { SRCC_TERMS_AND_CONDITIONS } from '@/constants/legal';

const TermsAndConditionsPage = () => {
	return (
		<main className='w-full mt-44 lg:mt-36'>
			<div className='w-full p-4 md:px-16 max-w-7xl mx-auto pb-8 md:pb-16 lg:pb-32'>
				<section className='w-full'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-normal'>
						Terms & <span className='font-medium'>Conditions</span>
					</h1>
					<p className='text-slate-500 text-base lg:text-lg mt-4'>
						Effective Date: 13th Feb 2024
					</p>
					<h2 className='font-medium text-justify'>
						Welcome to Shri Rajayoham Construction Company&apos;s
						website. By accessing and using this website, you agree
						to comply with and be bound by these Terms and
						Conditions. Please read the following terms carefully.
					</h2>
				</section>
				<section className='w-full mt-8'>
					<ul className='list-disc ml-4 flex flex-col gap-6'>
						{SRCC_TERMS_AND_CONDITIONS.map((toc, index) => (
							<li key={`toc-${index} block`}>
								<h3 className='font-medium text-lg'>
									{toc.title}
								</h3>
								<ul className='list-decimal'>
									{toc.descriptions.map((desc, index2) => (
										<li
											className='text-slate-500 text-justify'
											key={`toc-${index}-${index2}`}
										>
											{desc}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
					<p className='mt-4 text-sm text-justify'>
						By using our website, you acknowledge that you have
						read, understood, and agreed to these Terms and
						Conditions. If you do not agree to these terms, please
						do not use our website.
					</p>
				</section>
			</div>
		</main>
	);
};

export default TermsAndConditionsPage;
