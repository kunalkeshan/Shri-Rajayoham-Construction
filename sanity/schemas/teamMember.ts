import { defineField, defineType } from 'sanity';
import { CircleUserRoundIcon } from 'lucide-react';

export default defineType({
	name: 'teamMember',
	title: 'Team Members',
	type: 'document',
	icon: CircleUserRoundIcon,
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				},
			],
		}),
		defineField({
			name: 'bio',
			title: 'Bio',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
});
