import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { dateFormatter } from '@/lib/utils';

type BlogCardProps = React.ComponentProps<'div'> & {
	post: SRCC_BlogPost;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
	return (
		<div className='w-full'>
			<h3 className='text-2xl font-semibold'>{post.title}</h3>
			<p className='text-slate-500 capitalize'>
				{dateFormatter(new Date(post.publishedAt))} - Written by{' '}
				{post.author.name}
			</p>
			<div className='flex items-center flex-col lg:flex-row gap-8 mt-4'>
				<div className='w-[48%] overflow-hidden rounded-md'>
					<Image
						src={
							post?.image?.url ?? '/assets/fallback/icon-grid.svg'
						}
						alt={post?.image?.alt ?? post.title}
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-video'
					/>
				</div>
				<div>
					<p className='text-justify'>{post.description}</p>
					<Link
						href={`/blogs/${post.slug}`}
						className='text-blue-500 hover:underline'
					>
						Continue reading...
					</Link>
				</div>
			</div>
			{post.categories && post.categories.length > 0 ? (
				<div className='mt-4 flex flex-wrap gap-2 items-center'>
					{post.categories.map((category) => (
						<Tooltip key={`${post._id}-category-${category._id}`}>
							<TooltipTrigger>
								<Badge>{category.title}</Badge>
							</TooltipTrigger>
							<TooltipContent className='max-w-xs'>
								{category.description}
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			) : null}
		</div>
	);
};

export default BlogCard;
