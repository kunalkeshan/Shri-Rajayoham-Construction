'use client';
// Dependencies
import React from 'react';
import EnquiryForm from '../contact/EnquiryForm';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useQueryModal } from '@/context/QueryModalContext';

/**
 * Renders a dialog component for querying information.
 * @returns JSX.Element
 */
const QueryDialog = () => {
	const { isModalOpen, handleToggleQueryModal } = useQueryModal();
	return (
		<Dialog open={isModalOpen} onOpenChange={handleToggleQueryModal}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Got an enquiry? Let us know!</DialogTitle>
				</DialogHeader>
				<EnquiryForm />
			</DialogContent>
		</Dialog>
	);
};

export default QueryDialog;
