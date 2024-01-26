import React from 'react';

type ServicesProps = React.ComponentProps<'section'> & {
	services: Array<SRCC_Service>;
};

const Services: React.FC<ServicesProps> = ({ services }) => {
	return <section>Services</section>;
};

export default Services;
