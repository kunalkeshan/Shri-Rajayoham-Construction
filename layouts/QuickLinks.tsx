import React from 'react';
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	PhoneIcon,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { SRCC_EMAIL, SRCC_MOBILE, SRCC_SOCIALS } from '@/constants/srcc';

const QuickLinks = () => {
	return (
		<section className='border-b w-full flex items-center h-10 justify-between px-4 md:px-8 lg:px-32 bg-white'>
			<div>
				<Button asChild className='' variant={'link'}>
					<Link
						href={`mailto:${SRCC_EMAIL}`}
						target='_blank'
						className='text-xs'
					>
						<MailIcon
							strokeWidth={1.5}
							size={20}
							className='mr-2 text-[#ff6969]'
						/>
						{SRCC_EMAIL}
					</Link>
				</Button>
				<Button asChild className='' variant={'link'}>
					<Link
						href={`tel:${SRCC_MOBILE}`}
						target='_blank'
						className='text-xs'
					>
						<PhoneIcon
							strokeWidth={1.5}
							size={20}
							className='mr-2 text-[#ff6969]'
						/>
						{SRCC_MOBILE}
					</Link>
				</Button>
			</div>
			<div className='hidden md:flex gap-4'>
				{SRCC_SOCIALS.map((social) => (
					<Link
						href={social.url}
						target='_blank'
						className=''
						key={`quick-links-${social.name}`}
						title={social.name}
					>
						<social.Icon
							className='hover:text-[#ff6969] transition-all duration-300'
							strokeWidth={1.5}
							size={20}
						/>
					</Link>
				))}
			</div>
		</section>
	);
};

export default QuickLinks;