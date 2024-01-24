// Navigation Data

interface Navdata {
	name: string;
	url: string;
	target: '_blank' | '_self';
}

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		name: 'Home',
		url: '/',
		target: '_self',
	},
	{
		name: 'About Us',
		url: '/about',
		target: '_self',
	},
	{
		name: 'Projects',
		url: '/projects',
		target: '_self',
	},
	{
		name: 'Packages',
		url: '/packages',
		target: '_self',
	},
	{
		name: 'Blogs',
		url: '/blogs',
		target: '_self',
	},
	{
		name: 'Contact',
		url: '/contact',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION: NavdataCollection = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION: NavdataCollection = [
	...COMMON_NAVIGATION,
	{
		name: 'FAQs',
		url: '/contact#faqs',
		target: '_self',
	},
	{
		name: 'Careers',
		url: '/careers',
		target: '_self',
	},
];
