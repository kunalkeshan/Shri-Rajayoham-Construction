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

export const SRCC_SOCIALS: Array<SocialLinks> = [
	{
		name: 'Instagram',
		Icon: InstagramIcon,
		url: '#',
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
