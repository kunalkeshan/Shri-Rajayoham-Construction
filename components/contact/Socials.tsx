import React from 'react';
import Link from 'next/link';
import { SRCC_SOCIALS } from '@/constants/srcc';

const Socials = () => {
	return (
		<section className="w-full bg-app-bg">
			<div className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16">
				<div className="max-w-7xl mx-auto w-full">
					<h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
						Stay <span className="font-medium">connected.</span>
					</h1>
					<div className="w-full flex items-center justify-center flex-wrap gap-8 mt-8">
						{SRCC_SOCIALS.map((social) => (
							<Link
								key={`socials-${social.name}`}
								href={social.url}
								target="_blank"
								className="px-4 py-2 rounded-md max-w-[12rem] w-full border flex items-center justify-center hover:bg-app-bg transition-all duration-300"
							>
								<social.Icon
									strokeWidth={1.5}
									className="mr-2"
								/>
								<span>{social.name}</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Socials;
