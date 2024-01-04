// Dependencies
import TESTIMONAIL from './queries/testimonial';

const queriesContainer = {
	TESTIMONAIL,
};

export const getQuery = (queryFor: keyof typeof queriesContainer) => {
	return queriesContainer[queryFor];
};
