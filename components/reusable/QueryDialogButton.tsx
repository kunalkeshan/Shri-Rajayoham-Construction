'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useQueryModal } from '@/context/QueryModalContext';

const QueryDialogButton = () => {
	const { handleOpenQueryModal } = useQueryModal();
	return (
		<Button
			onClick={handleOpenQueryModal}
			className='p-8 bg-app hover:bg-app/90 hover: hover:-translate-y-1 transition-all duration-300'
		>
			Enquire now
		</Button>
	);
};

export default QueryDialogButton;
