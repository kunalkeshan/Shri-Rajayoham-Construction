// Dependencies
import React from 'react';
import { StarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type TestimonialCardProps = React.ComponentProps<'div'> & {
	testimonial: SRCC_Testimonial;
};

const MAX_NUMBER_OF_STARS = 5 as const;

/**
 * Renders a testimonial card.
 * @param {SRCC_Testimonial} testimonial - The testimonial details.
 * @returns {JSX.Element} The rendered testimonial card.
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
	return (
		<Card>
			<CardContent className='flex aspect-video items-center justify-center p-6'>
				<div className='text-center flex flex-col gap-2 md:gap-4 justify-center items-center'>
					<Tooltip>
						<TooltipTrigger
							className='flex gap-2 items-center'
							aria-label='rating information'
						>
							{Array(testimonial.rating)
								.fill(true)
								.map((_, i) => (
									<StarIcon
										key={`star-${testimonial._id}-included-${i}`}
										size={20}
										strokeWidth={1.5}
										className='text-app-secondary'
										fill='#b4843e'
									/>
								))}
							{Array(MAX_NUMBER_OF_STARS - testimonial.rating)
								.fill(true)
								.map((_, i) => (
									<StarIcon
										key={`star-${testimonial._id}-excluded-${i}`}
										size={20}
										strokeWidth={1.5}
										className='text-app-secondary'
									/>
								))}
						</TooltipTrigger>
						<TooltipContent>
							{testimonial.rating}/{MAX_NUMBER_OF_STARS} stars!
						</TooltipContent>
					</Tooltip>
					<div className='text-base md:text-lg text-gray-500'>
						{testimonial.content}
					</div>
					<div>
						<p className='text-blue-900 font-semibold hover:text-blue-950 text-sm md:text-base'>
							- {testimonial.name}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default TestimonialCard;
