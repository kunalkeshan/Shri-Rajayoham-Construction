import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type FAQsProps = React.ComponentProps<'section'> & {
	faqs: Array<SRCC_FAQ>;
};

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
	return (
		<section className='w-full max-w-7xl mx-auto p-4 md:px-16' id='faqs'>
			<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
				You have question,{' '}
				<span className='font-medium'>we have answers</span>
			</h2>
			<Accordion
				type='single'
				collapsible
				className='mt-8 max-w-4xl mx-auto'
			>
				{faqs && faqs.length > 0
					? faqs.map((faq, index) => (
							<AccordionItem
								key={`faq-item-${index}`}
								value={`faq-item-${index}`}
								className='text-left'
							>
								<AccordionTrigger className='text-left'>
									{faq.question}
								</AccordionTrigger>
								<AccordionContent>
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
					  ))
					: null}
			</Accordion>
		</section>
	);
};

export default FAQs;
