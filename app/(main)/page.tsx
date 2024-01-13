"use client";
import EnquiryStrip from "@/components/Landing/EnquiryStrip";
import HeroCarousel from "@/components/Landing/HeroCarousel";
import Services from "@/components/Landing/Services";
import React from "react";

const HomePage = () => {
    return (
        <main className="w-full h-[calc(100vh-8.5rem)] mt-[8.5rem]">
            <HeroCarousel />
            <Services />
            <EnquiryStrip />
        </main>
    );
};

export default HomePage;
