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

type SRCC_TeamMember = SRCC_Base_Model &
	Readonly<{
		name: string;
		image: { url: string; alt: string };
		slug: string;
		position: SRCC_WorkPosition;
		role?: SRCC_WorkRole;
		about?: string;
		bio?: TypedObject | TypedObject[];
		email: string;
		socialLinks?: Array<{
			platform:
				| 'linkedin'
				| 'twitter'
				| 'instagram'
				| 'github'
				| 'website';
			url: string;
		}>;
	}>;

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

type SRCC_Service = SRCC_Base_Model &
	Readonly<{
		name: string;
		description: string;
		icon: {
			_type: string;
			name: string;
			provider: string;
			svg: string;
		};
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
