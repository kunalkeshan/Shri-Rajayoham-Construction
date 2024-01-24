import Image from "next/image";
import React from "react";

const AboutPage = () => {
	const data = [
		{
			title: "Mission",
			desc: "Our mission is to continue shaping Chennai's skyline with iconic structures that blend architectural innovation, functionality, and sustainability. We aim to be the driving force behind the city's growth, creating spaces that enrich lives and inspire communities. At SRCC, we don't just build structures,  we craft experiences that endure. Join us on this journey to transform dreams into reality, one brick at a time.",
			img: "/assets/about/1.svg",
		},
		{
			title: "Vision",
			desc: "Our Client's satisfaction is the essence of our success and as such we will continually strive to provide each and every Client with an extraordinary experience, while delivering every project on time, within budget and with the highest level of quality and professionalism.",
			img: "/assets/about/2.svg",
		},
		{
			title: "Brand values",
			desc: "At SRCC Constructions, our focus is on YOU and what YOU want to achieve. We pride ourselves on forging strong, lasting relationships, which help us to continue to thrive and develop. Our desire to work closely with those who share the same vision and values is why many of our clients have a multiple project history. Exceeding client expectations has resulted in continual repeat business within the local area, which means we are building a foundation not only for our business but also for our community.",
			img: "/assets/about/3.svg",
		},
	];

	return (
		<section className="mt-[8.5rem] h-full">
			<div className="bg-[url('/assets/hero/1.jpg')] bg-cover bg-no-repeat bg-center">
				<div className="bg-black bg-opacity-60 px-4 md:px-16 py-16 md:py-32">
					<h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white">
						About Us
					</h1>
				</div>
			</div>
			<div className="w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto pt-8 md:pt-16 lg:pt-32">
				{data.map((item, idx) => (
					<section
						key={idx}
						className="flex flex-col-reverse lg:odd:flex-row lg:even:flex-row-reverse items-center justify-between gap-8 md:gap-16"
					>
						<div className="lg:w-1/2">
							<Image
								src={item.img}
								alt={item.title}
								width={100}
								height={100}
								className="w-full"
							/>
						</div>
						<div className="flex flex-col gap-4 lg:w-1/2">
							<h1 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left text-app font-semibold">
								{item.title}
							</h1>
							<p className="text-justify text-base md:text-lg text-slate-500">
								{item.desc}
							</p>
						</div>
					</section>
				))}
			</div>
			<div className="w-full bg-app-bg">
				<div className="w-full p-8 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-app">
						About the company
					</h1>
					<p className="mt-4 text-justify text-slate-500">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Unde vel dolor necessitatibus impedit facere
						similique quos doloribus, et architecto non. Ullam harum
						quis vitae culpa iusto provident. Alias, ab nihil. Lorem
						ipsum dolor sit amet consectetur adipisicing elit.
						Repudiandae nemo sed dolores itaque, fugiat sint nulla
						tenetur assumenda ex dicta rem corrupti pariatur
						accusantium commodi harum minima est eligendi ullam.
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Qui quasi commodi impedit eaque repudiandae
						voluptatibus harum laudantium, eveniet sunt ut inventore
						reprehenderit aliquid modi quae vel consectetur
						recusandae blanditiis a?
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
