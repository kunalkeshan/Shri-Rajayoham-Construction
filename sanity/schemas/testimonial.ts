import { defineField, defineType } from 'sanity';
import { QuoteIcon } from 'lucide-react';

export default defineType({
	name: 'testimonial',
	title: 'Testimonials',
	type: 'document',
	icon: QuoteIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description:
				'This field captures the name of the person providing the testimonial.',
			placeholder: 'John Doe',
			validation: (Rule) => Rule.required().min(2).max(100),
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'text',
			description:
				'Here, you can input the actual testimonial content or feedback. (Note: Text entered in a new line will be considered as a space)',
			placeholder:
				'Shri Rajayoham Construction Company exceeded my expectations. Their precision, professionalism, and dedication turned my vision into a reality. A top-notch team for any construction project! ...',
			validation: (Rule) => Rule.required().min(8).max(1000),
		}),
		defineField({
			name: 'rating',
			title: 'Rating',
			type: 'number',
			description:
				'Rate the testimonial on a numeric scale, typically used for feedback or reviews. (On a scale of 1 to 5)',
			placeholder: '5',
			validation: (Rule) =>
				Rule.required().greaterThan(0).lessThan(6).integer().positive(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description:
				'Upload an image of the person associated with the testimonial. (Recommended 1:1 ratio for image)',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					description:
						'A text field for providing alternative text for the image, enhancing accessibility.',
					placeholder: "John Doe's Photo",
					validation: (Rule) => Rule.required(),
				},
			],
		}),
	],
});
