import { SRCC_EMAIL, SRCC_MOBILE } from "@/constants/srcc";
import Link from "next/link";
import React from "react";

const Location = () => {
	return (
		<section className="w-full">
			<div className="w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
				<div>
					<h2 className="text-center text-2xl mb-4 font-semibold">
						Locate Us
					</h2>
					<div className="aspect-square">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.2929410377726!2d80.0771071!3d12.821064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7ac67159d41%3A0xb28b4b6c29c39d1d!2sSri%20Mangalam%20Enterprise!5e0!3m2!1sen!2sin!4v1707830437877!5m2!1sen!2sin"
							className="w-full h-full rounded-lg"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<h2 className="text-2xl md:text-4xl font-medium">
						We are here for helping you and to provide the service
						you want at the best price!
					</h2>
					<div>
						<h3 className="text-xl font-semibold">Opening Hours</h3>
						<div className="w-full flex items-center justify-between border-dotted border-b py-4">
							<p>Mon - Sat:</p>
							<p>8:00 AM - 9:00 PM</p>
						</div>
						<div className="w-full flex items-center justify-between border-dotted border-b py-4">
							<p>Sun:</p>
							<p>8:00 AM - 2:00 PM</p>
						</div>
					</div>
					<div className="">
						<h3 className="text-xl font-semibold">Address</h3>
						<p className="text-justify mt-2">
							SF No:350/23b, Nellikuppam Road, Kayarambedu,
							Guduvancheri, Chennai - 603202. (Land mark : Opp
							ESSAR Petrol bunk )
						</p>
					</div>
					<div>
						<h3 className="text-xl mb-2 font-semibold">Mail Us</h3>
						<Link className="" href={`mailto:${SRCC_EMAIL}`}>
							{SRCC_EMAIL}
						</Link>
					</div>
					<div>
						<h3 className="text-xl mb-2 font-semibold">Call Us</h3>
						<Link className="" href={`tel:${SRCC_MOBILE}`}>
							{SRCC_MOBILE}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Location;
