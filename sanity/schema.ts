import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import teamMember from './schemas/teamMember';
import testimonial from './schemas/testimonial';
import faq from './schemas/faq';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, teamMember, category, blockContent, testimonial, faq],
};
