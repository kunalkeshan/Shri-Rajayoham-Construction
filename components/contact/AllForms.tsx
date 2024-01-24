import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EnquiryForm from './EnquiryForm';
import InvestorRelationsForm from './InvestorRelationsForm';
import SupplierVendorForm from './SupplierVendorForm';
import ServicesRequiredForm from './ServicesRequiredForm';
import CareersForm from './CareersForm';
import {
	BarChart,
	Briefcase,
	Container,
	MessageCircleQuestion,
	TrafficCone,
} from 'lucide-react';

type AllFormsProps = React.ComponentProps<'section'> & {
	careers: Array<SRCC_Career>;
};

const AllForms: React.FC<AllFormsProps> = ({ careers }) => {
	const TRIGGERS = [
		{
			value: 'enquiry',
			title: 'Enquiry',
			Icon: MessageCircleQuestion,
		},
		{
			value: 'investor-relations',
			title: 'Investor Relations',
			Icon: BarChart,
		},
		{
			value: 'supplier-vendor',
			title: 'Supplier / Vendor',
			Icon: Container,
		},
		{
			value: 'services-required',
			title: 'Services Required',
			Icon: TrafficCone,
		},
		{
			value: 'careers',
			title: 'Careers @SRCC',
			Icon: Briefcase,
		},
	];
	const CONTENT = [
		{
			value: 'enquiry',
			Form: EnquiryForm,
		},
		{
			value: 'investor-relations',
			Form: InvestorRelationsForm,
		},
		{
			value: 'supplier-vendor',
			Form: SupplierVendorForm,
		},
		{
			value: 'services-required',
			Form: ServicesRequiredForm,
		},
	];
	return (
		<section className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:pb-16 lg:pb-32'>
			<h1 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
				Get in <span className='font-medium'>touch.</span>
			</h1>
			<Tabs
				defaultValue='enquiry'
				className='w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-10'
			>
				<TabsList className='grid grid-cols-2 md:grid-cols-1 h-fit gap-2 min-w-60 md:sticky md:top-40'>
					{TRIGGERS.map((trigger) => (
						<TabsTrigger
							key={`trigger-${trigger.value}`}
							value={trigger.value}
							className='flex items-center md:text-lg w-full justify-start'
						>
							<trigger.Icon
								className='mr-2 shrink-0'
								strokeWidth={1.5}
							/>
							<span>{trigger.title}</span>
						</TabsTrigger>
					))}
				</TabsList>
				{CONTENT.map((content) => (
					<TabsContent
						key={`content-${content.value}`}
						value={content.value}
						className='w-full'
					>
						<content.Form />
					</TabsContent>
				))}
				<TabsContent value='careers'>
					<CareersForm careers={careers} />
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default AllForms;
