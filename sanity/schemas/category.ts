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
			description:
				'This is where you specify the title or name of the category. It helps identify and categorize the content or items within this category.',
			placeholder: 'Construction Tips',
			validation: (Rule) => Rule.required().min(2).max(100),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"The slug is a user-friendly part of the URL. It's automatically generated based on the title but can be customized if needed. The slug simplifies web addresses and makes them easier to remember.",
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Use this field to provide a brief description or explanation of the category. Describe what this category encompasses or any additional information that helps clients understand its purpose or content. (Note: Text entered in a new line will be considered as a space)',
			placeholder:
				'Explore valuable construction tips and industry insights in this category.',
			validation: (Rule) => Rule.required().min(8).max(500),
		}),
	],
});
