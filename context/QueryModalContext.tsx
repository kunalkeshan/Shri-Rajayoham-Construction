'use client';
// Dependencies
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/gtag';

type QueryModelContextType = {
	isModalOpen: boolean;
	handleCloseQueryModal: () => void;
	handleOpenQueryModal: () => void;
	// eslint-disable-next-line no-unused-vars
	handleToggleQueryModal: (isOpen: boolean) => void;
};

const QueryModalContext = createContext({} as QueryModelContextType);

/**
 * Provides a context for managing the state of a query modal.
 *
 * @param children - The child components to be wrapped by the QueryModalProvider.
 */
const QueryModalProvider = ({ children }: { children: React.ReactNode }) => {
	// State for managing the visibility of the query modal
	const [isModalOpen, setIsModalOpen] = useState(false);
	const pathname = usePathname();

	// Opens the query modal
	const handleOpenQueryModal = () => {
		setIsModalOpen(true);
	};

	// Closes the query modal
	const handleCloseQueryModal = () => {
		setIsModalOpen(false);
	};

	/**
	 * Toggles the visibility of the query modal.
	 *
	 * @param isOpen - Whether the query modal should be open or closed.
	 */
	const handleToggleQueryModal = (isOpen: boolean) => {
		setIsModalOpen(isOpen);
	};

	// Runs on component mount to open the query modal after a timeout
	useEffect(() => {
		const TIMEOUT_WAIT = 10000;
		const isFirstVisit = sessionStorage.getItem('firstVisit') === null;
		if (isFirstVisit) {
			const timeoutId = setTimeout(handleOpenQueryModal, TIMEOUT_WAIT);
			sessionStorage.setItem('firstVisit', 'true');
			return () => clearTimeout(timeoutId);
		}
	}, []);

	useEffect(() => {
		pageview(pathname);
	}, [pathname]);

	return (
		<QueryModalContext.Provider
			value={{
				isModalOpen,
				handleCloseQueryModal,
				handleOpenQueryModal,
				handleToggleQueryModal,
			}}
		>
			{children}
		</QueryModalContext.Provider>
	);
};

export default QueryModalProvider;

/**
 * Custom hook that provides access to the QueryModalContext.
 * Throws an error if used outside of a QueryModalProvider.
 * @returns The QueryModalContext object.
 */
export const useQueryModal = () => {
	const context = useContext(QueryModalContext);
	if (!context) {
		throw new Error(
			'useQueryModal must be used within a QueryModalProvider'
		);
	}
	return context;
};
