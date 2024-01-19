import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

const SheetNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<MenuIcon />
			</SheetTrigger>
			<SheetContent side={'top'}>
				<SheetHeader className='flex flex-col items-center'>
					<SheetTitle>
						<Image
							src='/assets/logo.png'
							width={100}
							height={100}
							alt='logo'
						/>
					</SheetTitle>
					<SheetDescription>
						<div className='flex flex-col'>
							{NAVBAR_NAVIGATION.map((item) => (
								<Button
									className=''
									variant={'ghost'}
									key={`sheet-nav-${item.url}`}
								>
									<Link href={item.url} target={item.target}>
										{item.name}
									</Link>
								</Button>
							))}
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default SheetNav;
