/**
 * Counter Component
 */

'use client';

// Dependencies
import { animate, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

type CounterProps = React.ComponentProps<'span'> & {
	from: number;
	to: number;
};

/**
 * Counter component that animates a number from a starting value to an ending value.
 *
 * @component
 * @param {CounterProps} props - The props for the Counter component.
 * @param {number} props.from - The starting value of the counter.
 * @param {number} props.to - The ending value of the counter.
 * @returns {JSX.Element} The Counter component.
 */
const Counter: React.FC<CounterProps> = ({ from, to, ...props }) => {
	const nodeRef = useRef<HTMLSpanElement | null>(null);
	const isInView = useInView(nodeRef, { once: true });

	useEffect(() => {
		const node = nodeRef.current;
		const controls = animate(from, to, {
			duration: 1.5,
			delay: 0.5,
			onUpdate(value) {
				if (node) {
					node.textContent = `${value.toFixed(0)}+`;
				}
			},
		});
		return () => controls.stop();
	}, [from, to, isInView]);

	return <span ref={nodeRef} {...props} />;
};

export default Counter;
