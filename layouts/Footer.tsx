import { FOOTER_NAVIGATION } from '@/constants/navigation';
import { SRCC_SOCIALS } from '@/constants/srcc';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-white border-t'>
			<div className='mx-auto w-full max-w-7xl p-4 md:px-16'>
				<div className='flex flex-col lg:flex-row gap-8 justify-between'>
					<div className='my-4'>
						<Link
							href='/'
							className='flex lg:flex-col lg:items-start items-center gap-2'
						>
							<Image
								src='/assets/logo.jpg'
								width={100}
								height={100}
								className='w-16 rounded-full'
								alt='logo'
							/>
							<span className='text-lg text-wrap font-semibold whitespace-nowrap dark:text-white'>
								Shri Rajayoham Construction Company
							</span>
						</Link>
					</div>
					<div className='grid gap-6 my-4 lg:gap-8 grid-cols-2 place-items-center md:grid-cols-3'>
						<div className='md:col-span-1'>
							<p className='mb-6 text-sm text-left font-semibold text-gray-900 uppercase dark:text-white'>
								Quick links
							</p>
							<ul className='text-gray-500 grid grid-cols-2 text-left md:grid-cols-2 gap-4 dark:text-gray-400 font-medium'>
								{FOOTER_NAVIGATION.map((item, idx) => (
									<li key={idx}>
										<Link
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
										href='/privacy'
										className='hover:underline'
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
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
				<div className='sm:flex sm:items-center sm:justify-between pb-2'>
					<span className='text-sm text-center text-gray-500 dark:text-gray-400'>
						© 2024 - {new Date().getFullYear()} Shri Rajayoham
						Construction Company. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
