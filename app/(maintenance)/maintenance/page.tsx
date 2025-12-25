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
		<section className="py-24 relative">
			<div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
				<div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
					<div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 flex">
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
						<div className="w-full flex-col justify-start items-center gap-4 flex">
							<h2 className="text-center text-foreground text-3xl font-bold font-manrope leading-normal">
								Site Maintenance in Progress
							</h2>
							<p className="max-w-3xl text-center text-muted-foreground text-base font-normal leading-relaxed">
								Our website is currently undergoing scheduled maintenance to
								serve you better. Just like we build quality structures,
								we&apos;re improving our digital presence. We apologize for any
								inconvenience and will be back online shortly.
							</p>
						</div>
					</div>
					<div className="w-full max-w-2xl mx-auto">
						<Image
							src="/assets/maintenance.png"
							alt="Under Maintenance"
							width={800}
							height={600}
							className="w-full h-auto object-cover"
							priority
						/>
					</div>
					<div className="max-w-2xl text-center">
						<p className="text-muted-foreground text-base font-normal leading-relaxed mb-4">
							For urgent construction inquiries or to discuss your upcoming
							projects, please don&apos;t hesitate to contact us directly using
							the details below.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
							<a
								href={`mailto:${SRCC_EMAIL}`}
								className="text-primary hover:underline font-medium"
							>
								Email: {SRCC_EMAIL}
							</a>
							<span className="hidden sm:inline text-muted-foreground">|</span>
							<a
								href={`tel:${SRCC_MOBILE}`}
								className="text-primary hover:underline font-medium"
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
