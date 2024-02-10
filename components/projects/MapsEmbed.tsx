// Dependencies
import React from 'react';

const MapsEmbed = () => {
	return (
		<section className='w-full'>
			<div className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8'>
				<h2 className='capitalize text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
					Our Project Sites
				</h2>
				<div className='aspect-w-16 aspect-h-16 lg:aspect-h-9 max-w-4xl mx-auto overflow-hidden rounded-lg mt-8'>
					<iframe
						src='https://www.google.com/maps/d/embed?mid=1KFQ7HW9bRQto4Td22SJsrfAVYS2GDD4&ehbc=2E312F'
						className='w-full '
					/>
				</div>
			</div>
		</section>
	);
};

export default MapsEmbed;
