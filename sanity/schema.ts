import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import teamMember from './schemas/teamMember';
import testimonial from './schemas/testimonial';
import faq from './schemas/faq';
import workRole from './schemas/workRole';
import workPosition from './schemas/workPosition';
import service from './schemas/service';
import workPackage from './schemas/package';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		category,
		teamMember,
		workPosition,
		workRole,
		workPackage,
		service,
		testimonial,
		faq,
		blockContent,
	],
};
