import { defineField, defineType } from 'sanity';
import { PackageIcon } from 'lucide-react';

export default defineType({
	name: 'package',
	title: 'Packages',
	type: 'document',
	icon: PackageIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Enter the name of the package.',
			validation: (Rule) => Rule.required().min(2).max(100),
			placeholder: 'Package Name',
		}),
		defineField({
			name: 'image',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			description: 'Upload or select the cover image for the package.',
			validation: (Rule) => Rule.required(),
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
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'An auto-generated unique identifier for the package.',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Provide a brief description of the package. (Note: Text entered in a new line will be considered as a space)',
			placeholder: 'Package description goes here...',
			validation: (Rule) => Rule.min(8).max(500),
		}),
		defineField({
			name: 'features',
			title: 'Features',
			type: 'blockContent',
			description:
				'Provide detailed information about the features included in the package.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'price',
			title: 'Price',
			type: 'number',
			validation: (Rule) => Rule.required().integer().positive(),
			description:
				'Specify the price of the package as a positive integer. (Per Sq. Feet)',
			placeholder: 'Package Price',
		}),
		defineField({
			name: 'services',
			title: 'Services',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'service' } }],
			description: 'Select the services associated with the package.',
		}),
	],
});
