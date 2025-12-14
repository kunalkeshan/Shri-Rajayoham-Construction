import { SRCC_GA_TRACKING_ID, SRCC_GA_TRACKING_ID_2 } from '@/constants/srcc';

export const GA_TRACKING_ID: string | undefined = SRCC_GA_TRACKING_ID;
export const GA_TRACKING_ID_2: string | undefined = SRCC_GA_TRACKING_ID_2;

export const pageview = (url: string) => {
	if (GA_TRACKING_ID) {
		(window as any).gtag('config', GA_TRACKING_ID, {
			page_path: url,
		});
	}
	if (GA_TRACKING_ID_2) {
		(window as any).gtag('config', GA_TRACKING_ID_2, {
			page_path: url,
		});
	}
};

export const event = ({
	action,
	category,
	label,
	value,
}: {
	action: string;
	category: string;
	label: string;
	value: number;
}) => {
	if (GA_TRACKING_ID) {
		(window as any).gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
	if (GA_TRACKING_ID_2) {
		(window as any).gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};
