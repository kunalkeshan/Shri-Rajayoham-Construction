'use client';
// Dependencies
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

/**
 * Renders a sheet navigation component.
 * @returns The sheet navigation component.
 */
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
			<SheetTrigger aria-label='Open Navigation'>
				<MenuIcon />
				<span className='sr-only'>Open Navigation</span>
			</SheetTrigger>
			<SheetContent side={'top'}>
				<SheetHeader className='flex flex-col items-center'>
					<SheetTitle>
						<Link href={'/'} prefetch={false}>
							<Image
								src='/assets/logo.jpg'
								width={100}
								height={100}
								alt='logo'
								loading='lazy'
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
							<Link
								href={item.url}
								target={item.target}
								prefetch={false}
							>
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
