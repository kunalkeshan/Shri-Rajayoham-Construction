import { defineField, defineType } from 'sanity';
import { UserCircleIcon } from 'lucide-react';

export default defineType({
	name: 'teamMember',
	title: 'Team Members',
	type: 'document',
	icon: UserCircleIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Enter the name of the team member.',
			validation: (Rule) => Rule.required().min(2).max(100),
			placeholder: 'John Doe',
		}),
		defineField({
			name: 'image',
			title: 'Profile Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			description:
				'Upload an image of the team member. (Recommended 1:1 ratio for image)',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Image Alt',
					description:
						'A descriptive alt text for the profile image.',
					validation: (Rule) => Rule.required(),
				},
			],
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			description: 'Auto-generated from the name, must be unique.',
		}),
		defineField({
			name: 'position',
			title: 'Position',
			type: 'reference',
			to: { type: 'workPosition' },
			description: 'Select the position of the team member.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'reference',
			to: { type: 'workRole' },
			description: 'Select the role of the team member.',
		}),
		defineField({
			name: 'about',
			title: 'About',
			type: 'text',
			validation: (Rule) => Rule.max(250),
			description:
				'Provide a brief description (max 250 characters) about the team member. (Note: Text entered in a new line will be considered as a space)',
		}),
		// defineField({
		// 	name: 'bio',
		// 	title: 'Bio',
		// 	type: 'blockContent',
		// 	description:
		// 		"Enter a detailed body of text as the team member's bio.",
		// }),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: (Rule) => Rule.email(),
			description: "Enter the team member's email address. (Optional)",
			placeholder: 'john.doe@example.com',
		}),
		defineField({
			name: 'socialLinks',
			title: 'Social Links',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'platform',
							title: 'Platform',
							type: 'string',
							validation: (Rule) => Rule.required(),
							options: {
								list: [
									'linkedin',
									'twitter',
									'instagram',
									'github',
									'website',
								],
							},
						},
						{
							name: 'url',
							title: 'URL',
							type: 'url',
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
			description: 'Add social links for the team member.',
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
});
