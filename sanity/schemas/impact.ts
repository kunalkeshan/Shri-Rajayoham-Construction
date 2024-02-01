import { defineField, defineType } from 'sanity';
import { TargetIcon } from 'lucide-react';

export default defineType({
	name: 'impact',
	title: 'Impact',
	type: 'document',
	icon: TargetIcon,
	fields: [
		defineField({
			name: 'count',
			title: 'Count',
			type: 'number',
			description: 'The positive integer representing the impact count.',
			validation: (Rule) => Rule.integer().positive().required(),
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'The title describing the impact (max 100 characters).',
			validation: (Rule) => Rule.required().max(100),
		}),
	],
});
