// Dependencies
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BookMarkedIcon, FilmIcon, Grid3X3Icon, UserIcon } from 'lucide-react';
import { SRCC_SOCIALS } from '@/constants/srcc';

// const FOLLOWER_COUNT = 52;

/**
 * Renders an Instagram card component.
 * The component displays information about an Instagram account, including the profile picture, username, follower count, and links to view the profile and different sections of the account.
 */
const InstaCard = () => {
	const instagramLink = SRCC_SOCIALS.find(
		(social) => social.name === 'Instagram'
	)!.url;
	return (
		<section className='w-full p-4 md:px-16 lg:max-w-7xl lg:mx-auto pb-8 md:pb-16 lg:pb-32'>
			<section className='w-full border max-w-4xl mx-auto rounded-lg p-6 md:p-12  grid grid-cols-1 place-items-center lg:grid-cols-4 gap-4'>
				<div className='flex items-center gap-4 lg:col-span-2'>
					<Image
						src='/assets/logo.jpg'
						alt='srcc logo'
						width={100}
						height={100}
						className='rounded-full lg:w-32'
						unoptimized
					/>
					<div className='flex flex-col gap-2 justify-center'>
						<h2 className='text-wrap break-words md:text-lg lg:text-xl font-semibold'>
							shri_rajayoham_construction
						</h2>
						{/* <p>{FOLLOWER_COUNT} followers</p> */}
						<Button asChild className='w-fit' variant={'secondary'}>
							<Link href={instagramLink} target='_blank'>
								View profile
							</Link>
						</Button>
					</div>
				</div>
				<div>
					<Image
						src='/assets/qrcode.png'
						alt='srcc instagram account qr'
						width={100}
						height={100}
						className='w-44'
						unoptimized
					/>
				</div>
				<div className='w-52 lg:w-fit'>
					<Image
						src='/assets/instalogo.png'
						alt='instagram logo'
						width={100}
						height={100}
						className='w-full h-auto object-contain'
						unoptimized
					/>
				</div>
			</section>
			<section className='w-full max-w-4xl flex justify-center mx-auto h-fit'>
				<div className='flex gap-4 md:gap-6 lg:gap-12'>
					<Link
						href={instagramLink}
						target='_blank'
						className='flex text-xs py-4 items-center border-t-2 border-black'
					>
						<Grid3X3Icon
							strokeWidth={1.5}
							size={16}
							className='mr-1'
						/>
						<p>POSTS</p>
					</Link>
					<Link
						href={instagramLink}
						target='_blank'
						className='flex text-xs py-4 items-center'
					>
						<FilmIcon
							strokeWidth={1.5}
							size={16}
							className='mr-1'
						/>
						<p>REELS</p>
					</Link>
					<Link
						href={instagramLink}
						target='_blank'
						className='flex text-xs py-4 items-center'
					>
						<BookMarkedIcon
							strokeWidth={1.5}
							size={16}
							className='mr-1'
						/>
						<p>SAVED</p>
					</Link>
					<Link
						href={instagramLink}
						target='_blank'
						className='flex text-xs py-4 items-center'
					>
						<UserIcon
							strokeWidth={1.5}
							size={16}
							className='mr-1'
						/>
						<p>TAGGED</p>
					</Link>
				</div>
			</section>
		</section>
	);
};

export default InstaCard;
