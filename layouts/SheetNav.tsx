'use client';

import React, { useState } from 'react';
import {
	Sheet,
	SheetContent,
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
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleToggle = (isOpen: boolean) => {
		setOpen(isOpen);
	};

	return (
		<Sheet open={open} onOpenChange={handleToggle}>
			<SheetTrigger>
				<MenuIcon />
			</SheetTrigger>
			<SheetContent side={'top'}>
				<SheetHeader className='flex flex-col items-center'>
					<SheetTitle>
						<Link href={'/'}>
							<Image
								src='/assets/logo.png'
								width={100}
								height={100}
								alt='logo'
							/>
						</Link>
					</SheetTitle>
				</SheetHeader>
				<div className='flex flex-col'>
					{NAVBAR_NAVIGATION.map((item) => (
						<Button
							className=''
							variant={'ghost'}
							key={`sheet-nav-${item.url}`}
							onClick={handleClose}
						>
							<Link href={item.url} target={item.target}>
								{item.name}
							</Link>
						</Button>
					))}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default SheetNav;
