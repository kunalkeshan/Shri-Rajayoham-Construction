import React from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { queries } from "@/sanity/queries";
import Image from "next/image";
import PackageCard from "@/components/packages/PackageCard";

const PackagesPage = async () => {
	const packages = await sanityFetch<Array<SRCC_Package>>({
		query: queries.package.getAll,
	});

	const materials = [
		{
			img: "",
			title: "Steel",
			type: "JWS / Kamatchi / Arun",
			desc: "",
		},
		{
			img: "",
			title: "Cement",
			type: "UltraTech / Ramco",
			desc: "",
		},
		{
			img: "",
			title: "Sand",
			type: "M-Sand & P-Sand",
			desc: "",
		},
		{
			img: "",
			title: "Painting",
			type: "Interior & Exterior Walls",
			desc: "",
		},
		{
			img: "",
			title: "Readymix Concrete",
			type: "RDC / VRMS / ACC Concrete",
			desc: "",
		},
		{
			img: "",
			title: "Plumbing",
			type: "Finolex / Ashirwad",
			desc: "",
		},
		{
			img: "",
			title: "Flooring",
			type: "Kajaria / Somany",
			desc: "",
		},
		{
			img: "",
			title: "Sanitary Ware & Fittings",
			type: "Jaguar / Hindware / Parryware",
			desc: "",
		},
	];

	const FrontOfCard = ({ title, type }: { title: string; type: string }) => {
		return (
			<div className="absolute inset-0 w-full h-full flex flex-col gap-4 justify-center text-center p-6 items-center bg-green-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
				<h1 className="text-2xl font-semibold">{title}</h1>
				<p>{type}</p>
			</div>
		);
	};

	const BackOfCard = ({ desc }: { desc: string }) => {
		return (
			<div className="absolute inset-0 p-6 w-full h-full flex justify-center items-center bg-slate-500 transition-all z-10 [transform:rotateY(180deg)]">
				<p>{desc}</p>
			</div>
		);
	};
	return (
		<main className="w-full mt-[8.5rem] p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32">
			<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
				{packages.map((item, idx) => (
					<PackageCard pack={item} key={idx} />
				))}
			</section>
			<section className="bg-[#f7f8fb w-full">
				<div className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32">
					<h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
						<span className="font-medium">Materials</span> Used
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-16 mt-12">
						{materials.map((item, idx) => (
							<div
								key={idx}
								className="relative w-full h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]"
							>
								<FrontOfCard
									title={item.title}
									type={item.type}
								/>
								<BackOfCard desc={item.desc} />
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default PackagesPage;
