import React from "react";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { queries } from "@/sanity/queries";
import PackageCard from "@/components/packages/PackageCard";
import QuotationCalculator from "@/components/packages/QuotationCalculator";

const PackagesPage = async () => {
	const packages = await sanityFetch<Array<SRCC_Package>>({
		query: queries.package.getAll,
	});

	const materials = [
		{
			img: "/assets/materials/steel.webp",
			title: "Steel",
			type: "JWS / Kamatchi / Arun",
			desc: "Fe 550 High Tensioned TMT Rods",
		},
		{
			img: "/assets/materials/cement.webp",
			title: "Cement",
			type: "UltraTech / Ramco",
			desc: "Ramco PPC Cement Grade-53 or UltraTech PPC Cement Grade-53.",
		},
		{
			img: "/assets/materials/sand.jpg",
			title: "Sand",
			type: "M-Sand & P-Sand",
			desc: " M-Sand used for Masonry and Concrete Work.P-Sand used for plastering.",
		},
		{
			img: "/assets/materials/paint.jpg",
			title: "Painting",
			type: "Interior & Exterior Walls",
			desc: "Putty - Nerolac.Paint - Nippon Pro Matex Gold.Exterior Grade Paint - Nippon Weatherbond Advance",
		},
		{
			img: "/assets/materials/readymix.jpg",
			title: "Readymix Concrete",
			type: "RDC / VRMS / ACC Concrete",
			desc: "M20 Grade Concrete used for Roof Slabs & RCC Structures.M10 Grade Concrete used for PCC",
		},
		{
			img: "/assets/materials/plumbing.webp",
			title: "Plumbing",
			type: "Finolex / Ashirwad",
			desc: "Branded CPVC Heat Resistant Pipes used for concealed plumbing",
		},
		{
			img: "/assets/materials/flooring.png",
			title: "Flooring",
			type: "Kajaria / Somany",
			desc: "Anti-skid floor tile of size 4'x2' digital vitrified tiles",
		},
		{
			img: "/assets/materials/sanitary.jpg",
			title: "Sanitary Ware & Fittings",
			type: "Jaguar / Hindware / Parryware",
			desc: "Wall Mounted EWCs,Concealed Diverter, Overhead Shower & Bath Spout",
		},
	];

	const FrontOfCard = ({
		title,
		type,
		img,
	}: {
		title: string;
		type: string;
		img: string;
	}) => {
		return (
			<div
				style={{ backgroundImage: `url(${img})` }}
				className="absolute bg-black inset-0 w-full h-full bg-no-repeat bg-cover transition-all duration-100 delay-200 z-20 hover:opacity-0"
			>
				<div className="bg-gradient-to-b from-black/50 w-full h-full to-black/30 p-6 flex flex-col gap-4 justify-center text-center items-center">
					<h1 className="text-2xl font-semibold">{title}</h1>
					<p>{type}</p>
				</div>
			</div>
		);
	};

	const BackOfCard = ({ desc }: { desc: string }) => {
		return (
			<div className="absolute text-center inset-0 p-6 w-full h-full flex text-black justify-center items-center bg-slate-100 transition-all z-10 [transform:rotateY(180deg)]">
				<p>{desc}</p>
			</div>
		);
	};

	return (
		<>
			<main className="w-full mt-[8.5rem] p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32">
				<h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
					Our <span className="font-medium">Packages</span>
				</h2>
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
					{packages.map((item, idx) => (
						<PackageCard pack={item} key={idx} />
					))}
				</section>
				<section className="w-full">
					<div className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32">
						<h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
							<span className="font-medium">Materials</span> Used
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-16 mt-12">
							{materials.map((item, idx) => (
								<div
									key={idx}
									className="relative  shadow-md w-full h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]"
								>
									<FrontOfCard
										img={item.img}
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
			<section className="rounded-lg bg-[#f7f8fb] w-full">
				<div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16">
					<div className="py-12 ">
						<h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-normal">
							Online
							<span className="font-medium"> Quotation</span>
						</h2>
						<p className="text-center text-slate-500 mt-2">
							You Can Arrive Your Construction Estimate Here
						</p>
					</div>
					<QuotationCalculator />
				</div>
			</section>
		</>
	);
};

export default PackagesPage;
