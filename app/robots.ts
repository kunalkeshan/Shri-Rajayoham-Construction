import { MetadataRoute } from 'next';
import { SRCC_WEBSITE_URL } from '@/constants/srcc';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/studio/'],
		},
		sitemap: `${SRCC_WEBSITE_URL}/sitemap.xml`,
	};
}
