import React from 'react';

type FAQsProps = React.ComponentProps<'section'> & {
	faqs: Array<SRCC_FAQ>;
};

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
	return <section>FAQs</section>;
};

export default FAQs;
