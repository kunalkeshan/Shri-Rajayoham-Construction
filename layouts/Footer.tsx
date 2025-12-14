// Dependencies
import { FOOTER_NAVIGATION } from '@/constants/navigation';
import { SRCC_SOCIALS } from '@/constants/srcc';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Footer component for the Shri Rajayoham Construction website.
 * Displays the footer section with company logo, navigation links, social media links, and legal information.
 * @returns JSX.Element
 */
const Footer = () => {
	return (
		<footer className='bg-white border-t'>
			<div className='mx-auto w-full max-w-7xl p-4 md:px-16'>
				<div className='flex flex-col lg:flex-row gap-8 justify-between'>
					<div className='my-4'>
						<Link
							prefetch={false}
							href='/'
							className='flex lg:flex-col lg:items-start items-center gap-2'
						>
							<Image
								src='/assets/logo.jpg'
								width={100}
								height={100}
								className='w-16 rounded-full'
								alt='logo'
								loading='lazy'
							/>
							<span className='text-lg text-wrap font-semibold whitespace-nowrap dark:text-white'>
								Shri Rajayoham Construction Company
							</span>
						</Link>
					</div>
					<div className='grid gap-6 my-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
						<div className='md:col-span-1 lg:col-span-2'>
							<p className='mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white'>
								Quick links
							</p>
							<ul className='text-gray-500 grid grid-cols-2 text-left md:grid-cols-2 gap-4 dark:text-gray-400 font-medium'>
								{FOOTER_NAVIGATION.map((item, idx) => (
									<li key={idx}>
										<Link
											prefetch={false}
											href={item.url}
											className='hover:underline'
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='md:col-span-1'>
							<p className='mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white'>
								Socials
							</p>
							<ul className='text-gray-500 grid grid-cols-1 text-left gap-4 dark:text-gray-400 font-medium'>
								{SRCC_SOCIALS.map((social) => (
									<li key={`footer-social-${social.name}`}>
										<Link
											href={social.url}
											target='_blank'
											className='hover:underline'
										>
											{social.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='md:col-span-1 self-start'>
							<p className='mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white'>
								Legal
							</p>
							<ul className='text-gray-500 grid grid-cols-1 text-left gap-4 dark:text-gray-400 font-medium'>
								<li className=''>
									<Link
										prefetch={false}
										href='/privacy'
										className='hover:underline'
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										prefetch={false}
										href='/terms'
										className='hover:underline'
									>
										Terms &amp; Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700' />
				<div className='mb-4 text-sm text-center text-gray-500 dark:text-gray-400'>
					<p>
						We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data. Our{' '}
						<Link
							prefetch={false}
							href='/privacy'
							className='underline hover:text-gray-700 dark:hover:text-gray-300'
						>
							privacy statement
						</Link>{' '}
						has more details.
					</p>
				</div>
				<div className='flex items-center justify-between pb-2 text-sm text-gray-500 dark:text-gray-400'>
					<p>
						© 2024 - {new Date().getFullYear()} Shri Rajayoham
						Construction Company. All Rights Reserved.
					</p>
					<p>
						Designed & built by{' '}
						<Link
							href={'https://codelancedevs.com/'}
							target='_blank'
							className='underline text-[##00e07b] hover:text-[#00e07b] transition-all duration-300'
						>
							Codelance Devs
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
