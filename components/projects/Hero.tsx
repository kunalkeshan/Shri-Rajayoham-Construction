import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<section className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32 w-full h-[500px]">
			<div className="w-full h-full bg-slate-200 grid grid-cols-1 gap-4">
				<div className="col-span-1 w-full h-full bg-red-50">
					<Image src={""} alt="" width={100} height={100} />
				</div>
				<div className="col-span-1 w-full h-full bg-red-50">arrow</div>
				<div className="col-span-1 w-full h-full bg-red-50"></div>
				<div className="col-span-1 w-full h-full bg-red-50">arrow</div>
				<div className="col-span-1 w-full h-full bg-red-50"></div>
				<div className="col-span-1 w-full h-full bg-red-50">arrow</div>
			</div>
			{/* Completed */}
			{/* ONgoing */}
			{/* Upcoming */}
			{/* each should be clickbale and redirect to the repspective position in page, scroll by id basically */}
		</section>
	);
};

export default Hero;
