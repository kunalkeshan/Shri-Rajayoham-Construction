'use client';
/**
 * Read Time Component
 */
import React, { useMemo } from 'react';
import { Book } from 'lucide-react';
import { cn } from '@/lib/utils';

type ReadTimeProps = React.ComponentProps<'div'> & {
	body: SRCC_BlogPost['body'];
};

const ReadTime: React.FC<ReadTimeProps> = ({ className, body, ...props }) => {
	const readingTime = useMemo(() => {
		const AVERAGE_READING_TIME = 200;
		let totalWords = 0;
		body?.forEach((item: { children: { text?: string }[] }) => {
			if (item.children) {
				item.children.forEach((child) => {
					if (child?.text) {
						totalWords += child.text.length;
					}
				});
			}
		});
		return Math.round(totalWords / AVERAGE_READING_TIME);
	}, [body]);
	return (
		<div className={cn('flex items-center gap-2', className)} {...props}>
			<Book className='shrink-0' strokeWidth={1.5} size={20} />{' '}
			<span>{readingTime} min read</span>
		</div>
	);
};

export default ReadTime;
