type SRCC_Base_Model = Readonly<{
	_id: string;
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
