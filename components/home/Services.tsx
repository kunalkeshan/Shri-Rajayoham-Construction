// Dependencies
import React from 'react';

type ServicesProps = React.ComponentProps<'section'> & {
	services: Array<SRCC_Service>;
};

/**
 * Renders a section with the services offered.
 * @param {Array<SRCC_Service>} services - The services offered.
 * @returns {JSX.Element} The rendered section.
 */
const Services: React.FC<ServicesProps> = ({}) => {
	return <section></section>;
};

export default Services;
