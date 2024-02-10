'use client';
// Dependencies
import * as React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

/**
 * Renders the hero carousel for the home page.
 * @returns {JSX.Element} The rendered hero carousel.
 */
const HeroCarousel = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [, setCount] = React.useState(0);

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

	const data = [
		{
			title: 'Want to get your dream constructed by experts and professionals?',
			subtitle: "You've come to the RIGHT place at the RIGHT time",
			image: '/assets/hero/1.jpg',
		},
		{
			title: ' A residential and commercial construction company',
			subtitle: 'End to end design & execution',
			image: '/assets/hero/2.jpg',
		},
		{
			title: 'Most Trusted and Loved company',
			subtitle: 'A company lead by a leader Of 37 Years of experience',
			image: '/assets/hero/3.jpg',
		},
		{
			title: 'You give us your dream and trust',
			subtitle: 'We give you back your dream with the keys',
			image: '/assets/hero/4.jpg',
		},
		{
			title: ' High QUALITY at the RIGHT price',
			subtitle:
				'Not just building houses, Building Excellence and Delivering Dreams',
			image: '/assets/hero/5.jpg',
		},
		{
			title: ' ONE stop SOLUTION',
			subtitle: 'Buying Land to Handing over home',
			image: '/assets/hero/6.jpg',
		},
	];

	const handleSlideChange = (index: number) => {
		if (!api) return;
		api.scrollTo(index);
	};

	return (
		<div className='w-full h-full overflow-x-hidden'>
			<Carousel
				plugins={[
					Autoplay({
						delay: 6000,
					}),
				]}
				setApi={setApi}
				className='relative'
				opts={{
					loop: true,
				}}
			>
				<CarouselContent className=''>
					{data.map((item, index) => (
						<CarouselItem key={index} className=''>
							<div className=''>
								<div
									style={{
										backgroundImage: `url(${item.image})`,
									}}
									className={`flex w-full h-[calc(100vh-8.5rem)] bg-cover aspect-video bg-center bg-no-repeat items-center justify-center`}
								>
									<div className='bg-gradient-to-b text-white text-center from-black/60 to-black/60 w-full h-full p-8  flex flex-col gap-4 justify-center items-center rounded-md'>
										<div className='max-w-2xl'>
											<p className='text-lg md:text-2xl'>
												{item.title}
											</p>
											<p className='text-4xl md:text-5xl !leading-tight font-semibold'>
												{item.subtitle}
											</p>
										</div>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='py-2 text-center text-sm text-white absolute bottom-5 w-full flex items-center gap-4 justify-center'>
					{data.map((_, index) => (
						<button
							key={index}
							className={`text-base ${
								current === index + 1
									? 'font-bold text-white'
									: 'text-slate-300'
							}`}
							onClick={() => handleSlideChange(index)}
						>
							{index + 1}
						</button>
					))}
				</div>
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
