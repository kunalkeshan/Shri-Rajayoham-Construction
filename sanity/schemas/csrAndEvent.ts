import { defineField, defineType } from 'sanity';
import { PuzzleIcon } from 'lucide-react';

export default defineType({
	name: 'csrAndEvent',
	title: 'CSR & Events',
	type: 'document',
	icon: PuzzleIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'The title or name of the CSR or event.',
			validation: (Rule) => Rule.required().min(2).max(100),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'A brief description or explanation of the CSR or event. (Note: Text entered in a new line will be considered as a space)',
			validation: (Rule) => Rule.required().min(8).max(500),
		}),
		defineField({
			name: 'image',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			description:
				'Upload or select the cover image for the CSR or Event. (Recommended 1:1 ratio for image)',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Image Alt',
					description:
						'A descriptive alternative text for the cover image.',
					validation: (Rule) => Rule.required(),
				},
			],
		}),
		defineField({
			name: 'dateOccurred',
			title: 'Date Occurred',
			type: 'datetime',
			description: 'The date when the CSR activity or event occurred.',
		}),
	],
});
