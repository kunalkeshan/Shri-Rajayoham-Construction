import { defineField, defineType } from 'sanity';
import { Contact2Icon } from 'lucide-react';

export default defineType({
	name: 'careers',
	title: 'Careers / Job Opening',
	type: 'document',
	icon: Contact2Icon,
	fields: [
		defineField({
			name: 'role',
			title: 'Role',
			type: 'reference',
			to: [{ type: 'workRole' }],
			description: 'Select the role for this job opening.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'position',
			title: 'Position',
			type: 'reference',
			to: [{ type: 'workPosition' }],
			description: 'Select the specific position for this job opening.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'An auto-generated unique identifier for the career.',
			validation: (Rule) => Rule.required(),
			options: {
				source: '',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'experience',
			title: 'Expected Years of Experience',
			type: 'number',
			description:
				'Specify the expected years of experience for this role.',
			validation: (Rule) => Rule.required().integer().positive(),
		}),
		defineField({
			name: 'benefits',
			title: 'Job Benefits',
			type: 'blockContent',
			description:
				'Provide information about the benefits associated with this job.',
		}),
		defineField({
			name: 'description',
			title: 'Job Description',
			type: 'blockContent',
			description:
				'Write a detailed description of the job responsibilities and requirements.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'location',
			title: 'Job Location',
			type: 'string',
			options: {
				list: ['Remote', 'Onsite', 'Hybrid'],
			},
			description:
				'Select the job location type: Remote, Onsite, or Hybrid.',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'applicationFormLink',
			title: 'Google Form Link',
			type: 'url',
			description:
				'Provide the link to the Google Form for submitting job applications.',
			validation: (Rule) => Rule.required().uri({ scheme: ['https'] }),
		}),
	],
	preview: {
		select: {
			position: 'position.name',
			role: 'role.name',
			location: 'location',
		},
		prepare: (selected) => {
			return {
				title:
					selected?.role && selected?.position
						? `${selected.role} - ${selected.position}`
						: '',
				subtitle: selected.location,
			};
		},
	},
});
