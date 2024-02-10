// Dependencies
import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
	projectId: projectId || '',
	dataset: dataset || '',
});

/**
 * Generates a URL for the given image source.
 *
 * @param source The image source.
 * @returns The URL of the image.
 */
export const urlForImage = (source: Image) => {
	return imageBuilder?.image(source).auto('format').fit('max').url();
};
