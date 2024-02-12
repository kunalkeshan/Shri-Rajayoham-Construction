// Dependencies
import TESTIMONIAL from './queries/testimonial';
import FAQ from './queries/faq';
import CAREER from './queries/careers';
import TEAM_MEMBER from './queries/teamMember';
import SERVICE from './queries/service';
import POST from './queries/post';
import PACKAGE from './queries/package';
import PROJECT from './queries/project';
import IMPACT from './queries/impact';
import CSR_AND_EVENT from './queries/csrAndEvent';

/**
 * Object containing various queries.
 */
export const queries = {
	testimonial: TESTIMONIAL,
	faq: FAQ,
	career: CAREER,
	teamMember: TEAM_MEMBER,
	service: SERVICE,
	post: POST,
	package: PACKAGE,
	project: PROJECT,
	impact: IMPACT,
	csrAndEvent: CSR_AND_EVENT,
};
