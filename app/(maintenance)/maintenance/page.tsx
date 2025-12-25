// Dependencies
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SRCC_EMAIL, SRCC_MOBILE } from '@/constants/srcc';

export const metadata: Metadata = {
	title: 'Site Maintenance in Progress | Shri Rajayoham Construction Company',
	description:
		'Our website is currently undergoing scheduled maintenance. We will be back shortly.',
	robots: {
		index: false,
		follow: false,
	},
};

export default function MaintenancePage() {
	return (
		<section className="min-h-screen flex flex-col lg:flex-row lg:gap-8">
			{/* Left Side - Maintenance Image (Desktop/Tablet only, 40%) */}
			<div className="hidden lg:flex lg:w-2/5 items-center justify-center bg-muted py-12 px-8 lg:pr-4">
				<div className="w-full h-full flex items-center justify-center">
					<Image
						src="/assets/maintenance.png"
						alt="Under Maintenance"
						width={800}
						height={600}
						className="w-full h-auto max-h-[600px] object-contain"
						priority
					/>
				</div>
			</div>

			{/* Right Side - Content (60%) */}
			<div className="flex-1 lg:w-3/5 flex items-center justify-center p-6 md:p-12 lg:py-12 lg:pl-4 lg:pr-16">
				<div className="w-full max-w-2xl">
					{/* Logo */}
					<div className="flex justify-center lg:justify-start mb-8">
						<Link href="/" className="w-24 h-24 rounded-full overflow-hidden">
							<Image
								src="/assets/logo.jpg"
								alt="Shri Rajayoham Construction Company"
								width={96}
								height={96}
								className="w-full h-full object-cover"
								priority
							/>
						</Link>
					</div>

					{/* Heading */}
					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center lg:text-left">
						Site Maintenance in Progress
					</h1>

					{/* Description */}
					<p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed text-center lg:text-left">
						Our website is currently undergoing scheduled maintenance to serve
						you better. Just like we build quality structures, we&apos;re
						improving our digital presence. We apologize for any inconvenience
						and will be back online shortly.
					</p>

					{/* Mobile Image */}
					<div className="lg:hidden w-full max-w-md mx-auto mb-8">
						<Image
							src="/assets/maintenance.png"
							alt="Under Maintenance"
							width={800}
							height={600}
							className="w-full h-auto object-contain"
							priority
						/>
					</div>

					{/* Contact Information */}
					<div className="border-t border-border pt-8">
						<p className="text-muted-foreground text-base mb-4 text-center lg:text-left">
							For urgent construction inquiries or to discuss your upcoming
							projects, please don&apos;t hesitate to contact us directly using
							the details below.
						</p>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center lg:items-start lg:justify-start justify-center">
							<a
								href={`mailto:${SRCC_EMAIL}`}
								className="text-primary hover:underline font-medium text-sm md:text-base"
							>
								Email: {SRCC_EMAIL}
							</a>
							<span className="hidden sm:inline text-muted-foreground">|</span>
							<a
								href={`tel:${SRCC_MOBILE}`}
								className="text-primary hover:underline font-medium text-sm md:text-base"
							>
								Phone: {SRCC_MOBILE}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
