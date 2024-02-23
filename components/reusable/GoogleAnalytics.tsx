'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { SRCC_GA_TRACKING_ID } from '@/constants/srcc';
import { pageview } from '@/lib/gtag';

const GoogleAnalytics = () => {
	const pathname = usePathname();

	useEffect(() => {
		pageview(pathname);
	}, [pathname]);

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${SRCC_GA_TRACKING_ID}`}
			/>
			<Script
				id='gtag-init'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${SRCC_GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
				}}
			/>
		</>
	);
};

export default GoogleAnalytics;
