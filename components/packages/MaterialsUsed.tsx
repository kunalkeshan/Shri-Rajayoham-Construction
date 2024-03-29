// Dependencies
import React from 'react';

const materials = [
	{
		img: '/assets/materials/steel.webp',
		title: 'Steel',
		type: 'JWS / Kamatchi / Arun',
		desc: 'Tata, Agni, ARS.',
	},
	{
		img: '/assets/materials/cement.webp',
		title: 'Cement',
		type: 'UltraTech / Ramco',
		desc: 'Dalmia , Ultratech , Zuari',
	},
	{
		img: '/assets/materials/sand.jpg',
		title: 'Sand',
		type: 'M-Sand & P-Sand',
		desc: 'M-Sand used for Plastering & P-Sand used for Brickwork',
	},
	{
		img: '/assets/materials/paint.jpg',
		title: 'Painting',
		type: 'Interior & Exterior Walls',
		desc: 'Asian paints, Nippon paints.',
	},
	{
		img: '/assets/materials/readymix.jpg',
		title: 'Readymix Concrete',
		type: 'RDC / VRMS / ACC Concrete',
		desc: 'M20 Grade Concrete used for Roof Slabs & RCC Structures.M10 Grade Concrete used for PCC.',
	},
	{
		img: '/assets/materials/plumbing.webp',
		title: 'Plumbing',
		type: 'Finolex / Ashirwad',
		desc: 'Supreme, Finolex.',
	},
	{
		img: '/assets/materials/flooring.png',
		title: 'Flooring',
		type: 'Kajaria / Somany',
		desc: 'All tiles and marbles.',
	},
	{
		img: '/assets/materials/sanitary.jpg',
		title: 'Sanitary Ware & Fittings',
		type: 'Jaguar / Hindware / Parryware',
		desc: 'Parryware, Jaguar, Cera.',
	},
];

/**
 * Renders the front side of a card with a background image and title.
 * @param {string} title - The title of the card.
 * @param {string} img - The URL of the background image.
 * @returns {JSX.Element} The rendered front side of the card.
 */
const FrontOfCard = ({
	title,
	img,
}: {
	title: string;
	type: string;
	img: string;
}) => {
	return (
		<div
			style={{ backgroundImage: `url(${img})` }}
			className='absolute bg-black inset-0 w-full h-full bg-no-repeat bg-cover transition-all duration-100 delay-200 z-20 hover:opacity-0'
		>
			<div className='bg-gradient-to-b from-black/50 w-full h-full to-black/30 p-6 flex flex-col gap-4 justify-center text-center items-center'>
				<h1 className='text-2xl font-semibold'>{title}</h1>
				{/* <p>{type}</p> */}
			</div>
		</div>
	);
};

/**
 * Renders the back side of a card with the provided description.
 * @param {string} desc - The description to be displayed on the card.
 * @returns {JSX.Element} The JSX element representing the back side of the card.
 */
const BackOfCard = ({ desc }: { desc: string }) => {
	return (
		<div className='absolute text-center inset-0 p-6 w-full h-full flex text-black justify-center items-center bg-slate-100 transition-all z-10 [transform:rotateY(180deg)]'>
			<p>{desc}</p>
		</div>
	);
};

/**
 * Renders a section displaying the materials used.
 * @returns JSX.Element
 */
const MaterialsUsed = () => {
	return (
		<section className='w-full'>
			<div className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-8 md:py-16 lg:py-32'>
				<h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-normal'>
					<span className='font-medium'>Materials</span> Used
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 md:gap-16 mt-12'>
					{materials.map((item, idx) => (
						<div
							key={idx}
							className='relative shadow-md w-full h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]'
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
	);
};

export default MaterialsUsed;
