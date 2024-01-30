'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type IconFromSVGStringProps = React.ComponentProps<'span'> & {
	svgString: string;
	size?: number | `${number}` | undefined;
};

const IconFromSVGString: React.FC<IconFromSVGStringProps> = ({
	svgString,
	size = 20,
	className,
}) => {
	const eleRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		if (eleRef.current) {
			eleRef.current.innerHTML = svgString;
		}
	}, [svgString]);

	return (
		<span
			ref={eleRef}
			className={cn(className, `flex items-center justify-center`)}
			style={{
				width: `${size}px`,
				height: `${size}px`,
			}}
		></span>
	);
};

export default IconFromSVGString;
