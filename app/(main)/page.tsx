'use client';
import HeroCarousel from '@/components/landing/HeroCarousel';
import WhatWeDo from '@/components/landing/WhatWeDo';
import EnquiryStrip from '@/components/reusable/EnquiryStrip';
import React from 'react';

const HomePage = () => {
	return (
		<main className='w-full h-[calc(100vh-8.5rem)] mt-[8.5rem]'>
			<HeroCarousel />
			<WhatWeDo />
			<EnquiryStrip />
		</main>
	);
};

export default HomePage;
