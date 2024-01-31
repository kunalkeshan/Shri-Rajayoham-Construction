'use client';
import * as React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TestimonialCard from '../cards/TestimonialCard';

type TestimonialsProps = React.ComponentProps<'section'> & {
	testimonials: Array<SRCC_Testimonial>;
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(3);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const handleSlideChange = (index: number) => {
		if (!api) return;
		api.scrollTo(index);
	};

	return (
		<section className='bg-app-bg w-full'>
			<div className='bg-[url("/assets/testbg.svg")] overflow-hidden bg-no-repeat bg-cover bg-center'>
				<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
					<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
						What our
						<span className='font-medium'> clients </span>
						say?
					</h2>
					<Carousel
						setApi={setApi}
						className='w-full mx-auto max-w-xl mt-12'
					>
						<CarouselContent className=''>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={`testimonial-item-${testimonial._id}`}
								>
									<TestimonialCard
										testimonial={testimonial}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
					<div className='py-2 text-center min-h-20 flex justify-center items-center mt-4 text-muted-foreground'>
						{testimonials.map((testimonial, index) => (
							<Avatar
								key={`testimonail-image-${testimonial._id}`}
								onClick={() => handleSlideChange(index)}
								className={`inline-block cursor-pointer transition-all duration-300 rounded-full mx-1 ${
									index === current - 1
										? 'w-14 h-14'
										: 'w-8 h-8'
								}`}
							>
								<AvatarImage
									src={testimonial.image.url}
									alt={testimonial.image.alt}
									className='w-full h-auto aspect-square object-cover'
								/>
								<AvatarFallback>
									{testimonial.name}
								</AvatarFallback>
							</Avatar>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
