import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { SRCC_MOBILE } from '@/constants/srcc';

const WhatsAppCTA = () => {
	const WHATSAPP_TEXT = encodeURIComponent(
		`Hello Shri Rajayoham Construction Company! 👋 I'm interested in your construction services. 
		Could you please provide more information about your offerings and pricing? Thanks!`
	);
	return (
		<Tooltip>
			<TooltipTrigger className='fixed bottom-10 right-5 z-50'>
				<Link
					href={`https://wa.me/${SRCC_MOBILE}?text=${WHATSAPP_TEXT}`}
					target='_blank'
					className=''
				>
					<Image
						src='/assets/logo.jpg'
						alt='logo'
						width={100}
						height={100}
						className='rounded-full w-20'
					/>
				</Link>
			</TooltipTrigger>
			<TooltipContent className='max-w-xs z-50' side='left' align='start'>
				Get in Touch on WhatsApp!
			</TooltipContent>
		</Tooltip>
	);
};

export default WhatsAppCTA;
