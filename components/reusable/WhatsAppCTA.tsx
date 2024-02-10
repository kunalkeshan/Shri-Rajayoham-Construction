// Dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { SRCC_MOBILE } from '@/constants/srcc';

/**
 * Renders a WhatsApp Call-to-Action button that allows users to contact Shri Rajayoham Construction Company.
 * The button opens a WhatsApp chat window with a pre-filled message.
 */
const WhatsAppCTA = () => {
	const WHATSAPP_TEXT = encodeURIComponent(
		`Hello Shri Rajayoham Construction Company! I'm interested in your construction services. Could you please contact me with your offerings and pricing?`
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
						className='rounded-full w-16'
					/>
				</Link>
			</TooltipTrigger>
			<TooltipContent
				className='max-w-xs z-50'
				side='left'
				align='center'
			>
				Get in Touch on WhatsApp!
			</TooltipContent>
		</Tooltip>
	);
};

export default WhatsAppCTA;
