'use client';
// Dependencies
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type IconFromSVGStringProps = React.ComponentProps<'span'> & {
	svgString: string;
	size?: number | `${number}` | undefined;
};

/**
 * Renders an icon from an SVG string.
 *
 * @param {Object} props - The component props.
 * @param {string} props.svgString - The SVG string to render.
 * @param {number} [props.size=20] - The size of the icon in pixels.
 * @param {string} [props.className] - Additional CSS class names for the icon.
 * @returns {React.ReactElement} The rendered icon component.
 */
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
