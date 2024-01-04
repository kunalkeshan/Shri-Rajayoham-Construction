import { defineField, defineType } from 'sanity';
import { NetworkIcon } from 'lucide-react';

export default defineType({
	name: 'workPosition',
	title: 'Work Positions',
	type: 'document',
	icon: NetworkIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description:
				'Enter the position name (e.g., Head, Lead, Senior, Manager).',
			validation: (Rule) => Rule.required().min(2).max(100),
			placeholder: 'Head',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Provide a brief description of the position. (Note: Text entered in a new line will be considered as a space)',
			validation: (Rule) => Rule.max(500),
			placeholder: 'Responsible for leadership and strategic planning.',
		}),
		defineField({
			name: 'order',
			title: 'Order',
			type: 'number',
			validation: (Rule) => Rule.integer().positive().min(1),
			description: 'A positive integer used for sorting positions.',
			placeholder: '1',
		}),
	],
});
