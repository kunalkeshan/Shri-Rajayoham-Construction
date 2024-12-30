// Dependencies
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SheetNav from './SheetNav';
import QuickLinks from '@/layouts/QuickLinks';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

/**
 * Renders the navigation bar component.
 * @returns The JSX element representing the navigation bar.
 */
const Navbar = () => {
	return (
		<nav className='fixed z-50 top-0 w-full'>
			<QuickLinks />
			<section className='w-full flex items-center justify-between lg:justify-center p-4 md:px-16 h-24 border-b bg-white'>
				<div className='hidden lg:flex'>
					{NAVBAR_NAVIGATION.slice(0, 3).map((item) => (
						<Button
							className=' group transition-all duration-300 ease-in-out hover:bg-white'
							variant={'ghost'}
							key={`main-nav-${item.url}`}
						>
							<Link
								className='bg-left-bottom font-semibold bg-gradient-to-r p-2 from-app to-app bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'
								href={item.url}
								target={item.target}
								prefetch={false}
							>
								{item.name}
							</Link>
						</Button>
					))}
				</div>
				<Link
					prefetch={false}
					href='/'
					className='w-16 rounded-full overflow-hidden mx-4 block'
				>
					<Image
						src='/assets/logo.jpg'
						width={100}
						height={100}
						className='w-full h-auto object-cover'
						alt='SRCC'
						loading='lazy'
					/>
				</Link>
				<div className='hidden lg:flex'>
					{NAVBAR_NAVIGATION.slice(3, 6).map((item) => (
						<Button
							className=' group transition-all duration-300 ease-in-out hover:bg-white'
							variant={'ghost'}
							key={`main-nav-${item.url}`}
						>
							<Link
								className='bg-left-bottom font-semibold bg-gradient-to-r p-2 from-app to-app bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out'
								href={item.url}
								target={item.target}
								prefetch={false}
							>
								{item.name}
							</Link>
						</Button>
					))}
				</div>
				<div className='lg:hidden'>
					<SheetNav />
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
