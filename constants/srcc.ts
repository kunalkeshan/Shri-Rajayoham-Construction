// Compnay Constants

// Dependencies
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	LucideIcon,
	TwitterIcon,
} from 'lucide-react';

type SocialLinks = {
	name: string;
	url: string;
	Icon: LucideIcon;
};

export const SRCC_EMAIL = 'example@gmail.com' as const;
export const SRCC_MOBILE = '+919876543210' as const;

export const SRCC_WEBSITE_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: ('https://shrirajayohamcc.vercel.app' as const);

export const SRCC_SOCIALS: Array<SocialLinks> = [
	{
		name: 'Instagram',
		Icon: InstagramIcon,
		url: 'https://www.instagram.com/shri_rajayoham_construction',
	},
	{
		name: 'Facebook',
		Icon: FacebookIcon,
		url: '#',
	},
	{
		name: 'LinkedIn',
		Icon: LinkedinIcon,
		url: '#',
	},
	{
		name: 'Twitter',
		Icon: TwitterIcon,
		url: '#',
	},
] as const;
