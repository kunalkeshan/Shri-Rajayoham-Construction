import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'faq',
	title: 'Frequently Asked Questions',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Question',
			type: 'string',
			description: 'The frequently asked question itself.',
			placeholder:
				'What types of construction projects does your company specialize in?',
			validation: (Rule) => Rule.required().min(2).max(500),
		}),
		defineField({
			name: 'answer',
			title: 'Answer',
			type: 'text',
			description:
				'The detailed answer to the frequently asked question. (Note: Text entered in a new line will be considered as a space)',
			placeholder:
				'Our construction company specializes in a wide range of projects, including residential, commercial, and industrial construction. From new builds to renovations, we have the expertise to handle diverse construction needs.',
			validation: (Rule) => Rule.required().min(8).max(1000),
		}),
		defineField({
			name: 'order',
			title: 'Priority Order',
			description:
				'A numerical value representing the priority or order of this Q/A. Lower values indicate higher priority. Use this field to customize the order in which Q/A are displayed or sorted.',
			type: 'number',
			placeholder: '1',
			validation: (Rule) => Rule.required().integer().min(1).positive(),
		}),
	],
	orderings: [
		{
			title: 'Priority Order, Asc',
			name: 'orderAsc',
			by: [{ field: 'order', direction: 'asc' }],
		},
		{
			title: 'Priority Order, Desc',
			name: 'orderDesc',
			by: [{ field: 'order', direction: 'desc' }],
		},
	],
	preview: {
		select: {
			question: 'question',
			order: 'order',
		},
		prepare(selection) {
			const { question, order } = selection;
			return {
				title: `${order !== undefined ? `${order}.` : 'NA'} ${
					question ? question : 'Question to be added'
				}`,
			};
		},
	},
});
