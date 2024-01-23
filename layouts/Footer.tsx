import { FOOTER_NAVIGATION } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white border-t">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="flex flex-col lg:flex-row gap-8 justify-between">
					<div className="mb-8 md:mb-0">
						<Link
							href="https://flowbite.com/"
							className="flex lg:flex-col lg:items-start items-center gap-2"
						>
							<Image
								src="/assets/logo.jpg"
								width={100}
								height={100}
								className="w-16 rounded-full"
								alt="logo"
							/>
							<span className="text-lg text-wrap font-semibold whitespace-nowrap dark:text-white">
								Shri Rajayoham Construction Company
							</span>
						</Link>
					</div>
					<div className="grid gap-6 grid-cols-2 md:grid-cols-4">
						<div className="md:col-span-2">
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Quick links
							</h2>
							<ul className="text-gray-500 grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-gray-400 font-medium">
								{FOOTER_NAVIGATION.map((item, idx) => (
									<li key={idx}>
										<Link
											href={item.url}
											className="hover:underline"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="md:col-span-1">
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Socials
							</h2>
							<ul className="text-gray-500 grid grid-cols-1 gap-4 dark:text-gray-400 font-medium">
								<li>
									<a href="#" className="hover:underline">
										Instagram
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Facebook
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Twitter
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
						<div className="md:col-span-1">
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								Legal
							</h2>
							<ul className="text-gray-500 grid grid-cols-1 gap-4 dark:text-gray-400 font-medium">
								<li className="">
									<a href="#" className="hover:underline">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-sm text-center text-gray-500 dark:text-gray-400">
						© 2024 Shri Rajayoham Construction Company. All Rights
						Reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
