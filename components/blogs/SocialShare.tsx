import React from 'react';
import { Button } from '@/components/ui/button';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';
import Link from 'next/link';

type SocialShareProps = React.ComponentProps<'section'> & {
	post: SRCC_BlogPost;
};

const SocialShare: React.FC<SocialShareProps> = ({ post }) => {
	const SHARE_TEXT = encodeURI(post.title);
	const SHARE_LINK = encodeURI(`${SRCC_WEBSITE_URL}/blogs/${post.slug}`);

	const WHATSAPP_TEXT = encodeURI(
		`${SHARE_TEXT}\n\nRead here: ${SHARE_LINK}`
	);
	return (
		<section className='mt-8 flex items-center gap-2 flex-wrap'>
			<Button
				className='bg-green-500 hover:bg-green-500/80 text-white'
				asChild
			>
				<Link
					href={`https://wa.me/?text=${WHATSAPP_TEXT}`}
					target='_blank'
				>
					WhatsApp
				</Link>
			</Button>
			<Button className='' asChild>
				<Link
					href={`https://twitter.com/intent/tweet?url=${SHARE_LINK}&text=${SHARE_TEXT}`}
					target='_blank'
				>
					Twitter
				</Link>
			</Button>
		</section>
	);
};

export default SocialShare;
