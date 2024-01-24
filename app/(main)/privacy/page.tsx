import React from 'react';
import { SRCC_PRIVACY_POLICY } from '@/constants/legal';

const PrivacyPolicyPage = () => {
	return (
		<main className='w-full mt-36 md:mt-24 p-4 md:p-16'>
			<div className='w-full max-w-7xl mx-auto'>
				<section className='w-full'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-normal'>
						Privacy <span className='font-medium'>Policy</span>
					</h1>
					<p className='text-slate-500 text-base lg:text-lg mt-4'>
						Effective Date: 13th Feb 2024
					</p>
					<h2 className='font-medium text-2xl'>
						At Shri Rajayoham Consturction Company, your privacy is
						of utmost importance to us. This Privacy Policy outlines
						how we collect, use, disclose, and protect your personal
						information when you visit our website or interact with
						us through our contact form. By using our website and
						providing your information, you consent to the practices
						described in this policy.
					</h2>
				</section>
				<section className='w-full mt-8'>
					<ul className='list-disc ml-4'>
						{SRCC_PRIVACY_POLICY.map((pp, index) => (
							<li key={`pp-${index} block`}>
								<h3 className='font-medium'>{pp.title}</h3>
								<ul className='ml-4'>
									{pp.descriptions.map((desc, index2) => (
										<li key={`pp-${index}-${index2}`}>
											{desc}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
					<p className='mt-4'>
						By using our website, you acknowledge that you have
						read, understood, and agreed to these Privacy Policies.
						If you do not agree to these terms, please do not use
						our website.
					</p>
				</section>
			</div>
		</main>
	);
};

export default PrivacyPolicyPage;
