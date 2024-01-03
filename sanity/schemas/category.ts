import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'category',
	title: 'Blog Categories',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
});
