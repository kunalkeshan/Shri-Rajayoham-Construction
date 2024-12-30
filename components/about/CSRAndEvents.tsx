import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { dateFormatter } from '@/lib/utils';

type CSRAndEventsProps = React.ComponentProps<'section'> & {
	csrAndEvents: Array<SRCC_CSRAndEvent>;
};

const CSRAndEvents: React.FC<CSRAndEventsProps> = ({ csrAndEvents }) => {
	return (
		<section className='w-full' id='csr-and-events'>
			<div className='w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
				<h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold text-app'>
					Corporate Social Responsibility
				</h2>
				<p className='mt-4 text-slate-800 text-center'>
					We believe in giving back to the community and making a
					difference. Here are some of our good deeds and events.
				</p>
				<div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 mt-8'>
					{csrAndEvents.map((item) => (
						<div key={item._id} className='group'>
							{item?.image ? (
								<div className='overflow-hidden rounded-lg'>
									<Image
										src={urlForImage(item.image)}
										alt={item.image.alt}
										width={100}
										height={100}
										className='w-full h-auto object-cover group-hover:scale-105 transition-all duration-300'
										unoptimized
										loading='lazy'
									/>
								</div>
							) : null}
							<div className='flex flex-col gap-2 mt-4'>
								<h3 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-app font-semibold'>
									{item.title}
								</h3>
								<p className='text-justify text-base md:text-lg text-slate-500'>
									{item.description}
								</p>
								{item?.dateOccurred ? (
									<p className='text-xs text-slate-400'>
										{dateFormatter(
											new Date(item.dateOccurred)
										)}
									</p>
								) : null}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CSRAndEvents;
