'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import { Copy } from 'lucide-react';
import TwitterX from '../icons/TwitterX';
import WhatsApp from '../icons/WhatsApp';
import Reddit from '../icons/Reddit';
import { LinkedinIcon } from 'lucide-react';

type SocialShareProps = React.ComponentProps<'section'> & {
	post: SRCC_BlogPost;
};

const SocialShare: React.FC<SocialShareProps> = ({ post }) => {
	const LINK = `${SRCC_WEBSITE_URL}/blogs/${post.slug}`;
	const SHARE_TEXT = encodeURI(post.title);
	const SHARE_LINK = encodeURI(LINK);

	const WHATSAPP_TEXT = encodeURI(`${post.title}\n\nRead here: ${LINK}`);
	// const LINKEDIN_TEXT = encodeURI(`mini=true&url=${LINK}&title=${post.title}&summary=${SRCC_WEBSITE_URL}&source=Shri Rajayoham Construction Company`)

	const handleCopyLinkToClipboard = () => {
		navigator.clipboard.writeText(LINK);
		toast('Link Copied!');
	};

	return (
		<section className='mt-8'>
			<p className='font-medium'>Share with...</p>
			<div className='flex items-center gap-2 flex-wrap mt-2'>
				<Button
					className='bg-green-500 hover:bg-green-500/80 text-white'
					asChild
				>
					<Link
						href={`https://wa.me/?text=${WHATSAPP_TEXT}`}
						target='_blank'
					>
						<WhatsApp className='mr-2' size={20} /> WhatsApp
					</Link>
				</Button>
				<Button
					className='bg-blue-500 hover:bg-blue-500/80 text-white'
					asChild
				>
					<Link
						href={`https://www.linkedin.com/sharing/share-offsite?url=${SHARE_LINK}`}
						target='_blank'
					>
						<LinkedinIcon
							className='mr-2'
							fill='#ffffff'
							size={20}
							strokeWidth={1}
						/>{' '}
						LinkedIn
					</Link>
				</Button>
				<Button className='' asChild>
					<Link
						href={`https://twitter.com/intent/tweet?url=${SHARE_LINK}&text=${SHARE_TEXT}`}
						target='_blank'
					>
						<TwitterX className='mr-2' fill='#ffffff' size={20} />{' '}
						Twitter
					</Link>
				</Button>
				<Button
					className='bg-red-500 hover:bg-red-500/80 text-white'
					asChild
				>
					<Link
						href={`https://reddit.com/submit?url=${SHARE_LINK}&title=${SHARE_TEXT}`}
						target='_blank'
					>
						<Reddit className='mr-2' fill='#ffffff' size={20} />{' '}
						Reddit
					</Link>
				</Button>
				{/* <Button className='bg-blue-500 hover:bg-blue-500/80 text-white' asChild>
					<Link
						href={`https://www.linkedin.com/shareArticle?${LINKEDIN_TEXT}`}
						target='_blank'
					>
						LinkedIn
					</Link>
				</Button> */}
				<Button className='' onClick={handleCopyLinkToClipboard}>
					<Copy className='mr-2' strokeWidth={1.5} size={20} /> Copy
					Link
				</Button>
			</div>
		</section>
	);
};

export default SocialShare;
