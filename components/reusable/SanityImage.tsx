'use client';
// Dependencies
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

/**
 * Renders an image component using the Next.js Sanity Image plugin.
 * @param {object} props - The component props.
 * @param {object} props.asset - The asset object containing the image data.
 * @returns {JSX.Element|null} The rendered image component or null if imageProps is falsy.
 */
const SanityImage = ({ asset }: any) => {
	const imageProps = useNextSanityImage(client, asset);
	if (!imageProps) return null;
	return (
		<Image
			// @ts-ignore
			{...imageProps}
			alt={asset?.alt}
			layout='responsive'
			sizes='(max-width: 800px) 100vw, 800px'
		/>
	);
};

export default SanityImage;
