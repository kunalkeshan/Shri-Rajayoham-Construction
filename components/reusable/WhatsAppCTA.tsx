import { SRCC_MOBILE } from "@/constants/srcc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsAppCTA = () => {
	const WHATSAPP_TEXT = encodeURIComponent(
		"Hi, I'm interested in your services."
	);
	return (
		<Link
			href={`https://wa.me/${SRCC_MOBILE}?text=${WHATSAPP_TEXT}`}
			target="_blank"
			className="fixed bottom-10 right-5 z-50"
		>
			<Image
				src="/assets/logo.jpg"
				alt="logo"
				width={100}
				height={100}
				className="rounded-full w-20"
			/>
		</Link>
	);
};

export default WhatsAppCTA;
