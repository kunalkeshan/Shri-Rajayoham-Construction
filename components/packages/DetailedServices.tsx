import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

import {
	Blinds,
	BrickWall,
	Cylinder,
	Database,
	DoorClosed,
	DoorOpen,
	DraftingCompass,
	Droplets,
	Grid2X2,
	LucideIcon,
	Paintbrush2,
	PenLine,
	Plug,
	ShieldPlus,
	Unplug,
} from 'lucide-react';

type ServiceType = {
	value: string;
	title: string;
	Icon: LucideIcon;
	content: Array<{
		type: 'paragraph' | 'list';
		values: string[];
	}>;
	images?: string[];
};

const DetailedServices = () => {
	const services: Array<ServiceType> = [
		{
			value: 'design-and-drawings',
			title: 'Design & Drawings',
			Icon: PenLine,
			content: [
				{
					type: 'list',
					values: [
						'2D Floor Plan',
						'2D elevation working drawings',
						'3D Elevation Design',
					],
				},
				{
					type: 'paragraph',
					values: [
						'Welcome to Zuony Infra, your one–stop shop for all your design and drawing needs. We specialize in 2D floor plans, 2D elevation working drawings, and 3D elevation designs. Our team of experienced professionals will work with you to create the perfect design for your project.',
						'At Zuony Infra, we understand that every project is unique and requires its own set of design requirements. That’s why we offer custom solutions tailored specifically to your needs. Whether you need a simple 2D floor plan or an intricate 3D model, our team is here to help you get the job done right. Contact us today for more information about our services!',
					],
				},
			],
		},
		{
			value: 'structural-designing',
			title: 'Structural Designing',
			Icon: DraftingCompass,
			content: [
				{
					type: 'list',
					values: [
						'Earth Work Excavation drawings',
						'Footings and Columns drawings',
						'Plinth beam drawings',
						'Sump drawings',
						'Roof slab shuttering drawings',
						'Roof slab reinforcement drawings',
						'Roof slab and Beam drawings for each level',
						'Staircase drawings',
					],
				},
				{
					type: 'paragraph',
					values: [
						'At Zuony Infra, we strive to provide our clients with the highest quality structural designs that are both cost–effective and safe. With our expertise in this field, you can rest assured that your project will be completed on time and within budget. Contact us today for more information about our services!',
					],
				},
			],
		},
		{
			value: 'electrical-drawing',
			title: 'Electrical Drawing',
			Icon: Plug,
			content: [
				{
					type: 'paragraph',
					values: [
						'At Zuony Infra, we understand the importance of electrical drawings for any construction project. Our team of experienced engineers and technicians are well-versed in creating detailed electrical drawings that meet all safety standards and regulations. We use the latest software to create accurate and precise drawings that are easy to read and understand.',
						'Our electrical drawings include all necessary information such as wiring diagrams, circuit diagrams, power distribution diagrams, lighting plans, and more. We also provide detailed specifications for each component used in the project. Our team is highly knowledgeable in all aspects of electrical engineering and can provide advice on the best solutions for your project.',
						'We take pride in our work and strive to ensure that our clients receive the highest quality of service. We are committed to providing timely delivery of our services so that your project can be completed on time and within budget. With Zuony Infra, you can rest assured that your electrical drawing needs will be met with precision and accuracy.',
					],
				},
			],
		},
		{
			value: 'plumbing-drawing',
			title: 'Plumbing Drawing',
			Icon: Droplets,
			content: [
				{
					type: 'paragraph',
					values: [
						'Our plumbing drawings include detailed diagrams of the entire system, including pipes, fixtures, valves, and other components. We also provide information on the materials used in the system, as well as any special requirements or considerations for installation. Our drawings are designed to be easy to read and understand, so that contractors can quickly identify any potential problems or issues before they arise.',
						'We take pride in our work and strive to provide our clients with the best possible service. We are committed to providing high-quality plumbing drawings that meet all industry standards and regulations. If you have any questions or concerns about your project’s plumbing drawing needs, please don’t hesitate to contact us today!',
					],
				},
			],
		},
		{
			value: 'structural-material-specifications-&-type',
			title: 'Structural Material Specifications & Type',
			Icon: BrickWall,
			content: [
				{
					type: 'paragraph',
					values: [
						'Our team of experienced professionals will work with you to determine the best type of material for your project, taking into account factors such as cost, durability, and environmental impact.',
						'We offer a wide range of structural materials, including steel, concrete, timber, and masonry. Steel is a strong and durable material that is often used in large-scale projects such as bridges and skyscrapers. Concrete is a versatile material that can be used for foundations and walls. Timber is an economical choice for smaller projects such as decks and fences. Masonry is a popular choice for outdoor structures such as patios and retaining walls.',
						'We will work closely with you to ensure that you get the most suitable material for your needs at an affordable price. Our team of experts will also provide advice on how to properly install and maintain your chosen material so that it lasts for years to come.',
					],
				},
			],
		},
		{
			value: 'painting',
			title: 'Painting',
			Icon: Paintbrush2,
			content: [
				{
					type: 'paragraph',
					values: [
						'For interior painting, the process includes the application of 2 coats of Birla wall putty, followed by 1 coat of Interior Primer. Finally, 2 coats of Asian Paints Royal emulsion will be applied to complete the painting.',
						'For external painting, the process begins with the application of 1 coat of Asian Paints Exterior Primer. This is followed by 2 coats of Asian Paints Apex Ultima for the front elevation and Apex weatherproof paint for the remaining sides to ensure durability and weather resistance.',
						'For metal and wood painting, the process involves applying 2 coats of Asian Paints Enamel painting to window grills and the MS main gate. The same treatment will be applied to internal wooden frames to ensure a consistent and durable finish throughout.',
					],
				},
			],
		},
		{
			value: 'flooring-tiles',
			title: 'Flooring Tiles',
			Icon: Grid2X2,
			content: [
				{
					type: 'list',
					values: [
						'Living, Dining & Bedroom -2’x2’ vitrified tiles',
						'Bath Room Wall Tiles-2’x4’ vitrified tiles',
						'Bath Room Floor Tiles -4’x2’ vitrified tiles',
						'Kitchen Wall tiles -2’x2’ vitrified tiles',
						'Kitchen Counter top – Granite 40 Mm Thick',
						'Staircase –Full Body Tiles or granite',
						'Balconies & Sitout Areas -2×2 Anti Skid Tiles',
						'Parking Floor–2×2 Anti Skid Tiles',
						'Terrace-1’x1’ Heat reflection tiles',
					],
				},
			],
		},
		{
			value: 'door-frames',
			title: 'Door Frames',
			Icon: DoorOpen,
			content: [
				{
					type: 'list',
					values: [
						'Main Door Frames- Teak Wood 1st quality Frame of 3’5”x7’ (thickness 5”x3”) @12,000/-',
						'Internal Doors: Teak Wood 2nd quality Frame of 3’x7’ (thickness 4”x3”)',
						'Bath Room Door Frame: Teak Wood 2nd quality Frame of 2.5”x7’ (thickness 4”x3”)',
						'Room Door: Laminated Flash Door',
						'For quality doors and windows at an affordable price, trust Zuony Infra! Contact us today to learn more about how we can help you create the perfect look for your space.',
					],
				},
			],
		},
		{
			value: 'doors',
			title: 'Doors',
			Icon: DoorClosed,
			content: [
				{
					type: 'list',
					values: [
						'Main Door: 1st quality teak wood @30000/-',
						'Room Door: Laminated Flash Door',
						'Bathroom Door – WPC Door',
					],
				},
				{
					type: 'paragraph',
					values: [
						'We use only the highest quality materials in our products, ensuring that they are durable and long–lasting. Our doors and windows are designed to be energy efficient, helping you save money on your energy bills. We also offer a variety of customization options so that you can create a unique look for your home or business.',
					],
				},
			],
		},
		{
			value: 'electricals',
			title: 'Electricals',
			Icon: Unplug,
			content: [
				{
					type: 'list',
					values: [
						'Wires :  Finolex / Polycab/ Havelles brand Fire-proof wires will be provided.',
						'Switches and Boards: Legrand / GM Crest or equivalent Switches and Panelboards will be provided.',
						'A Main DB – Finolex & MCB – Havelles',
					],
				},
			],
		},
		{
			value: 'plumbing-work',
			title: 'Plumbing Work',
			Icon: Cylinder,
			content: [
				{
					type: 'list',
					values: [
						'Concealed plumbing line –Ashirvad-CPVC heat resistant',
						'Outer drain - Ashirvad – PVC pipe 6kg',
						'Outer water lines – Ashirvad PVC pipes',
						'Sanitary wares & Fittings',
						'EWC - Wall Mounted Jaguar Closet',
						'Wash Basin – Wall Hung designer basin',
						'Shower unit – concealed diverter with 4” shower head',
						'Floor trap - 4” SS Drain',
						'Kitchen Sink - 24” single bowl SS Sink-+Drain Board',
						'Kitchen top flexible neck dual flow',
					],
				},
			],
		},
		{
			value: 'windows',
			title: 'Windows',
			Icon: Blinds,
			content: [
				{
					type: 'list',
					values: [
						'UPVC Windows – Sliding UPVC window',
						'MS Work: Ms safety Gril',
						'Balcony Railing - SS Railings (304) With Balusters only',
						'Staircase Railing - MS Railings (304)',
					],
				},
				{
					type: 'paragraph',
					values: [
						'Are you looking for a reliable and experienced team to install windows in your home or office? Look no further than Zuony Infra! We are a leading construction company that specializes in window installation. Our team of experienced professionals have years of experience in the industry and can provide you with the highest quality window installation services. ',
						'We use only the best materials and techniques to ensure that your windows are installed correctly and securely. We also offer a wide range of customization options so that you can get the perfect look for your home or office. With our competitive prices, you can be sure that you are getting the best value for your money. Contact us today to learn more about our window installation services!',
					],
				},
			],
		},
		{
			value: 'water-tanks',
			title: 'Water Tanks',
			Icon: Database,
			content: [
				{
					type: 'paragraph',
					values: [
						"An ISI standard multi-layered water tank will be provided, with a capacity starting from 1000 liters. The tank's capacity will be determined based on the total built-up area, and its provision can be included in the cost estimation.",
						"An underground sump will be constructed using 8” solid concrete blocks with waterproof plastering. The sump tank's capacity will start from 5000 liters and will vary depending on the total built-up area. Its provision can be included in the cost estimation.",
					],
				},
			],
		},
		{
			value: 'miscellaneous',
			title: 'Miscellaneous',
			Icon: ShieldPlus,
			content: [
				{
					type: 'list',
					values: [
						'Terrace parapet wall upto 3Ft Height as per Elevation Design',
						'Solar Heater / Inverter provision',
						'Car washing Point at the Parking area',
					],
				},
				{
					type: 'paragraph',
					values: [
						'In addition to our terrace parapet wall services, we also offer solar heater/inverter provision and car washing point at the parking area. Our solar heater/inverter provision ensures that your home or business is equipped with an efficient and reliable source of energy, while our car washing point provides a convenient way to keep your vehicle clean and presentable.',
						'Both services are designed to make life easier for you, while also helping you save money on energy bills in the long run. At Zuony Infra, we strive to provide our customers with top–notch service and quality workmanship. We take pride in our ability to deliver projects on time and within budget, so you can rest assured that your project will be completed according to your specifications. Contact us today for more information about our terrace parapet wall upto 3Ft Height as per Elevation Design services or any other turnkey services we offer!',
					],
				},
			],
		},
	];

	return (
		<section className='w-full'>
			<div className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto pt-8 md:pt-16 lg:pt-32'>
				<Tabs defaultValue={services[0].value}>
					<TabsList
						className='h-fit w-full flex flex-wrap justify-center gap-4'
						defaultValue={services[0].value}
					>
						{services.map((service) => (
							<Tooltip key={`trigger-${service.value}`}>
								<TabsTrigger
									value={service.value}
									className=''
									asChild
								>
									<TooltipTrigger>
										<service.Icon
											className='shrink-0'
											strokeWidth={1.5}
											size={32}
										/>
									</TooltipTrigger>
								</TabsTrigger>
								<TooltipContent className='max-w-xs'>
									{service.title}
								</TooltipContent>
							</Tooltip>
						))}
					</TabsList>
					{services.map((service) => (
						<TabsContent
							key={`content-${service.value}`}
							value={service.value}
							className='w-full mt-8'
						>
							<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
								{service.title}
							</h2>
							{service.content.map((content, idx) => (
								<div
									key={`${service.value}-${content.type}-${idx}`}
									className='mt-4'
								>
									{content.type === 'list' ? (
										<ul className='list-disc list-inside'>
											{content.values.map(
												(value, listIdx) => (
													<li
														key={`${service.value}-${content.type}-${idx}-${listIdx}`}
													>
														{value}
													</li>
												)
											)}
										</ul>
									) : (
										content.values.map((value, paraIdx) => (
											<p
												key={`${service.value}-${content.type}-${idx}-${paraIdx}`}
												className='mt-4'
											>
												{value}
											</p>
										))
									)}
								</div>
							))}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
};

export default DetailedServices;
