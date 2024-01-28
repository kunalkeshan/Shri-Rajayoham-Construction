"use client";
import service from "@/sanity/schemas/service";
import { BadgeCheckIcon, IndianRupeeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type PackageCardProps = React.ComponentProps<"div"> & {
	pack: SRCC_Package;
};

const PackageCard: React.FC<PackageCardProps> = ({ pack }) => {
	console.log(pack);
	return (
		<div className="w-full rounded-lg border flex flex-col gap-6">
			<div>
				<Image
					src={pack.image?.url ?? "/assets/fallback/icon-grid.svg"}
					alt={pack.image?.alt ?? "/assets/fallback/icon-grid.svg"}
					width={100}
					height={100}
					className="w-full rounded-t-lg"
				/>
			</div>
			<div className="flex h-full flex-col items-center gap-4 text-center p-4">
				<h3 className="text-2xl font-semibold text-center">
					{pack.name}
				</h3>
				<p className="text-4xl font-bold flex items-center"><IndianRupeeIcon/>{pack.price}</p>
				<p className="text-justify">{pack.description}</p>
				<div className="w-ful mt-auto">
					{pack.services?.map((service, idx) => (
						<div key={idx} className="flex">
							<BadgeCheckIcon className="text-green-500" />
							{/* {service.icon?.svg} */}
							<p className="ml-2">{service.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
