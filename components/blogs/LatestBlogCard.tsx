// Dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { dateFormatter } from '@/lib/utils';
import { urlForImage } from '@/sanity/lib/image';

type LatestBlogCardProps = React.ComponentProps<'div'> & {
	post: SRCC_BlogPost;
};

/**
 * Renders a card with the latest blog post details.
 * @param {SRCC_BlogPost} post - The blog post details.
 * @returns {JSX.Element} The rendered card.
 */
const LatestBlogCard: React.FC<LatestBlogCardProps> = ({ post }) => {
	return (
		<div className='w-full flex gap-4 mt-4'>
			<div className='w-full max-w-[4rem] max-h-[4rem] overflow-hidden rounded-md'>
				<Image
					src={
						post?.mainImage
							? urlForImage(post?.mainImage)
							: '/assets/fallback/icon-grid.svg'
					}
					alt={post?.image?.alt ?? post.title}
					width={100}
					height={100}
					className='w-full h-auto object-cover aspect-square'
					loading='lazy'
				/>
			</div>
			<div className='w-full'>
				<h3 className='font-semibold'>{post.title}</h3>
				<p className='text-slate-500 text-sm capitalize'>
					{dateFormatter(new Date(post.publishedAt))}
				</p>
				<Link
					href={`/blogs/${post.slug}`}
					className='text-blue-500 hover:text-blue-600 font-medium hover:underline'
					prefetch={false}
				>
					Continue reading...
				</Link>
			</div>
		</div>
	);
};

export default LatestBlogCard;
