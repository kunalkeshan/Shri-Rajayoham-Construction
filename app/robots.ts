// Dependencies
import { MetadataRoute } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

/**
 * Returns the robots.txt file.
 * @returns {MetadataRoute.Robots} The robots.txt file.
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/studio/', '/maintenance'],
		},
		sitemap: `${SRCC_WEBSITE_URL}/sitemap.xml`,
	};
}
