type SRCC_Base_Model = Readonly<{
	_id: string;
}>;

type SRCC_BlogPost = SRCC_Base_Model &
	Readonly<{
		title: string;
		description: string;
		canonicalLink?: string;
		categories: Array<SRCC_BlogCategory>;
		author: SRCC_TeamMember;
		publishedAt: Date;
		image: { url: string; alt: string };
		body?: TypedObject | TypedObject[];
		featured: boolean;
		slug: string;
	}>;

type SRCC_BlogCategory = SRCC_Base_Model &
	Readonly<{
		title: string;
		description: string;
		slug: string;
	}>;

type SRCC_TeamMember = SRCC_Base_Model & Readonly<{}>;

type SRCC_WorkPosition = SRCC_Base_Model &
	Readonly<{
		name: string;
		description?: string;
		order: number;
	}>;

type SRCC_WorkRole = SRCC_Base_Model &
	Readonly<{
		name: string;
		descripion?: string;
	}>;

type SRCC_Testimonial = SRCC_Base_Model &
	Readonly<{
		name: string;
		content: string;
		rating: number;
		image: { url: string; alt: string };
	}>;

type SRCC_FAQ = SRCC_Base_Model &
	Readonly<{
		question: string;
		answer: string;
		order: number;
	}>;
