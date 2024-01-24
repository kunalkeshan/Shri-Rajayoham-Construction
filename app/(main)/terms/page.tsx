import React from 'react';
import { SRCC_TERMS_AND_CONDITIONS } from '@/constants/legal';

const TermsAndConditionsPage = () => {
	return (
		<main className='w-full mt-36 md:mt-24 p-4 md:p-16'>
			<div className='w-full max-w-7xl mx-auto'>
				<section className='w-full'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-normal'>
						Terms & <span className='font-medium'>Conditions</span>
					</h1>
					<p className='text-slate-500 text-base lg:text-lg mt-4'>
						Effective Date: 13th Feb 2024
					</p>
					<h2 className='font-medium text-2xl'>
						Welcome to Shri Rajayoham Construction Company&apos;s
						website. By accessing and using this website, you agree
						to comply with and be bound by these Terms and
						Conditions. Please read the following terms carefully.
					</h2>
				</section>
				<section className='w-full mt-8'>
					<ul className='list-disc ml-4'>
						{SRCC_TERMS_AND_CONDITIONS.map((toc, index) => (
							<li key={`toc-${index} block`}>
								<h3 className='font-medium'>{toc.title}</h3>
								<ul className='ml-4'>
									{toc.descriptions.map((desc, index2) => (
										<li key={`toc-${index}-${index2}`}>
											{desc}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
					<p className='mt-4'>
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
