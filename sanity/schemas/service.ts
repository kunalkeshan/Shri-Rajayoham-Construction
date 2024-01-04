import { defineField, defineType } from 'sanity';
import { BlocksIcon } from 'lucide-react';

export default defineType({
	name: 'service',
	title: 'Services',
	type: 'document',
	icon: BlocksIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Enter the name of the service.',
			validation: (Rule) => Rule.required().min(2).max(100),
			placeholder: 'Service Name',
		}),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'iconPicker',
			description: 'Select the icon for the service.',
			options: {
				storeSvg: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (Rule) => Rule.required().min(8).max(500),
			description: 'Provide a brief description of the service.',
			placeholder: 'Service description goes here...',
		}),
	],
});
