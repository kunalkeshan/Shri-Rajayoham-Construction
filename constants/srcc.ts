// Compnay Constants

// Dependencies
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	LucideIcon,
	TwitterIcon,
	YoutubeIcon,
} from 'lucide-react';

type SocialLinks = {
	name: string;
	url: string;
	Icon: LucideIcon;
};

export const SRCC_EMAIL = 'shrirajayohamcc@gmail.com' as const;
export const SRCC_MOBILE = '+919025869012' as const;
export const SRCC_MOBILE_2 = '+919789478887' as const;

export const SRCC_ADDRESS =
	'S.No: 350/23, First Floor, Nellikuppam Road, Kayarambedu, Guduvancheri, Chengalpattu - 603202. (Landmark: Near Nayara Petrol Bunk)' as const;

export const SRCC_WEBSITE_URL =
	process.env.NODE_ENV === 'development'
		? ('http://localhost:3000' as const)
		: ('https://shrirajayohamcc.com' as const);

export const SRCC_GA_TRACKING_ID = 'G-EZ0LTX6W1K' as const;
export const SRCC_GA_TRACKING_ID_2 = 'G-5BJJ1SDBQ' as const;

export const SRCC_SOCIALS: Array<SocialLinks> = [
	{
		name: 'Instagram',
		Icon: InstagramIcon,
		url: 'https://www.instagram.com/shri_rajayoham_construction',
	},
	{
		name: 'Facebook',
		Icon: FacebookIcon,
		url: 'https://www.facebook.com/shri.rajayoham.construction.company',
	},
	{
		name: 'LinkedIn',
		Icon: LinkedinIcon,
		url: 'https://www.linkedin.com/company/shri-rajayoham-construction-company',
	},
	{
		name: 'Twitter',
		Icon: TwitterIcon,
		url: 'https://twitter.com/Shrirajayohamcc',
	},
	{
		name: 'YouTube',
		Icon: YoutubeIcon,
		url: 'https://youtube.com/@Shrirajayohamcc?si=mSGrMtQ4M8N3468c',
	},
] as const;
