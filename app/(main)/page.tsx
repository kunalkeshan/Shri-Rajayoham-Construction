'use client';
import HeroCarousel from '@/components/home/HeroCarousel';
import Locations from '@/components/home/Locations';
import WhatWeDo from '@/components/home/WhatWeDo';
import Whyus from '@/components/home/Whyus';
import EnquiryStrip from '@/components/reusable/EnquiryStrip';
import InstaCard from '@/components/reusable/InstaCard';
import React from 'react';

const HomePage = () => {
	return (
		<main className='w-full h-[calc(100vh-8.5rem)] mt-[8.5rem]'>
			<HeroCarousel />
			<Locations/>
			<WhatWeDo />
			<EnquiryStrip />
			<Whyus />
			<InstaCard/>
		</main>
	);
};

export default HomePage;
