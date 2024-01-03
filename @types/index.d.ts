type Testimonial = Readonly<{
	_id: string;
	name: string;
	content: string;
	rating: number;
	image: { url: string; alt: string };
}>;
