import { defineField, defineType } from 'sanity';
import { BriefcaseIcon } from 'lucide-react';

export default defineType({
	name: 'workRole',
	title: 'Work Roles',
	type: 'document',
	icon: BriefcaseIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			description: 'Enter the role name (e.g., Architect, HR, PM).',
			validation: (Rule) => Rule.required().min(2).max(100),
			placeholder: 'Architect',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Provide a brief description of the role. (Note: Text entered in a new line will be considered as a space)',
			validation: (Rule) => Rule.max(500),
			placeholder:
				'Responsible for designing and planning construction projects.',
		}),
	],
});
