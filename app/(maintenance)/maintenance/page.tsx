// Dependencies
import type { Metadata } from 'next';
import { Construction } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Site Under Maintenance | Shri Rajayoham Construction Company',
	description: 'Our website is currently undergoing scheduled maintenance. We will be back shortly.',
	robots: {
		index: false,
		follow: false,
	},
};

export default function MaintenancePage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="max-w-2xl mx-auto px-4 py-16 text-center">
				<div className="flex justify-center mb-8">
					<div className="rounded-full bg-primary/10 p-6">
						<Construction className="w-16 h-16 text-primary" />
					</div>
				</div>

				<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
					We&apos;ll be back soon!
				</h1>

				<p className="text-xl text-muted-foreground mb-6">
					Shri Rajayoham Construction Company
				</p>

				<p className="text-lg text-muted-foreground mb-8">
					Our website is currently undergoing scheduled maintenance to serve you better.
					We apologize for any inconvenience and appreciate your patience.
				</p>

				<div className="border-t border-border pt-8">
					<p className="text-sm text-muted-foreground">
						If you need immediate assistance, please contact us at{' '}
						<a
							href="mailto:shrirajayohamcc@gmail.com"
							className="text-primary hover:underline"
						>
							shrirajayohamcc@gmail.com
						</a>
						{' '}or call{' '}
						<a
							href="tel:+919025869012"
							className="text-primary hover:underline"
						>
							+91 90258 69012
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
