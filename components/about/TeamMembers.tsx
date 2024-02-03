"use client";
import Image from "next/image";
import React from "react";

const TeamMembers = ({ teamMembers }: { teamMembers: SRCC_TeamMember[] }) => {
	return (
		<div>
			<section>
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-app">
					Leadership
				</h2>
				<div className="my-16">
					{teamMembers
						.filter((item) => item.slug === "rajarajan-kamaraj")
						.map((item, idx) => (
							<div
								key={`${item._id}`}
								className="flex flex-col items-center gap-4 w-full l:flex-row"
							>
								<div className="lg:w-1/2 flex justify-center">
									<Image
										src={
											item.image?.url ??
											"/assets/fallback/icon-grid.svg"
										}
										unoptimized
										className="w-[80%] md:w-[56%] lg:w-96 rounded-lg"
										alt={item.image?.alt ?? item.name}
										width={100}
										height={100}
									/>
								</div>
								<div className="mt-4 lg:w-1/2 text-center">
									<h3 className="text-2xl md:text-3xl font-bold ">
										{item.name}
									</h3>
									<p className="text-slate-500 text-lg">
										{item.position.name}
									</p>
									<p className="text-center">{item.about}</p>
								</div>
							</div>
						))}
				</div>
			</section>
			<section>
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-app">
					Meet Our Skilled Team
				</h2>
				<div className="my-16 flex flex-col gap-16">
					{teamMembers
						.filter((item) => item.slug != "rajarajan-kamaraj")
						.map((item, idx) => (
							<div
								key={`${item._id}`}
								className="flex flex-col md:gap-4 md:flex-row md:odd:flex-row-reverse"
							>
								<div className="md:w-1/2 flex justify-center">
									<Image
										src={
											item.image?.url ??
											"/assets/fallback/icon-grid.svg"
										}
										unoptimized
										className="w-[80%] md:w-[80%] lg:w-96 rounded-lg"
										alt={item.image?.alt ?? item.name}
										width={100}
										height={100}
									/>
								</div>
								<div className="mt-4 md:w-1/2 flex flex-col justify-center">
									<h3 className="text-2xl md:text-3xl font-bold ">
										{item.name}
									</h3>
									<p className="text-slate-500 text-lg">
										{item.position.name}
									</p>
									<p className="text-justify mt-4">
										{item.about}
									</p>
								</div>
							</div>
						))}
				</div>
			</section>
		</div>
	);
};

export default TeamMembers;
