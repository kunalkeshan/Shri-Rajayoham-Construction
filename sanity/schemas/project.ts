import { defineField, defineType } from 'sanity';
import { HomeIcon } from 'lucide-react';

export default defineType({
	name: 'project',
	title: 'Projects',
	type: 'document',
	icon: HomeIcon,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Enter the title of the project.',
			validation: (Rule) => Rule.required().min(2).max(100),
			placeholder: 'Project Title',
		}),
		defineField({
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			description:
				'Upload or select the cover image for the project. (Recommended 1:1 ratio for image)',
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
			description: 'An auto-generated unique identifier for the project.',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Provide a brief description of the project. (Note: Text entered in a new line will be considered as a space)',
			placeholder: 'Project description goes here...',
			validation: (Rule) => Rule.required().min(8).max(500),
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent',
			description: 'Enter the main content or details of the project.',
		}),
		defineField({
			name: 'duration',
			title: 'Duration (Months)',
			type: 'number',
			validation: (Rule) => Rule.integer().min(0).positive(),
		}),
		defineField({
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: ['upcoming', 'ongoing', 'completed'],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'budget',
			title: 'Budget (Indian Rupees)',
			type: 'number',
			validation: (Rule) => Rule.integer().positive().min(0),
			description:
				'Specify the budget for the project as a positive number.',
			placeholder: 'Project Budget',
		}),
		// defineField({
		// 	name: 'teamMembers',
		// 	title: 'Team Members',
		// 	type: 'array',
		// 	of: [{ type: 'reference', to: { type: 'teamMember' } }],
		// 	description: 'Select team members associated with the project.',
		// }),
		defineField({
			name: 'services',
			title: 'Services',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'service' } }],
			description: 'Select services associated with the project.',
		}),
		defineField({
			name: 'packages',
			title: 'Packages',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'package' } }],
			description: 'Select packages associated with the project.',
		}),
		defineField({
			name: 'testimonials',
			title: 'Testimonials',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'testimonial' } }],
			description: 'Select testimonials associated with the project.',
		}),
		defineField({
			name: 'imageGallery',
			title: 'Image Gallery',
			description:
				'A gallery of images related to the project, including images, captions, and alternative text.',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'galleryImage',
					fields: [
						{
							name: 'image',
							title: 'Image',
							type: 'image',
							options: {
								hotspot: true,
							},
							validation: (Rule) => Rule.required(),
							fields: [
								{
									name: 'alt',
									type: 'string',
									title: 'Alternative Text',
									validation: (Rule) => Rule.required(),
								},
							],
						},
						{
							name: 'caption',
							title: 'Caption',
							type: 'string',
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			status: 'status',
			duration: 'duration',
			budget: 'budget',
			teamMembers: 'teamMembers',
		},
		prepare(selection) {
			const { title, status, duration, budget, teamMembers } = selection;
			return {
				title: title,
				subtitle: `Status: ${status ?? 'TBD'} | Duration: ${
					duration ?? 'TBD'
				} months | Budget: ${
					budget ? `₹${budget}` : 'Not specified'
				} | Team Members: ${teamMembers ? teamMembers.length : 0}`,
			};
		},
	},
});
