'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type QueryModelContextType = {
	isModalOpen: boolean;
	handleCloseQueryModal: () => void;
	handleOpenQueryModal: () => void;
	handleToggleQueryModal: (isOpen: boolean) => void;
};

const QueryModalContext = createContext({} as QueryModelContextType);

const QueryModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenQueryModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseQueryModal = () => {
		setIsModalOpen(false);
	};

	const handleToggleQueryModal = (isOpen: boolean) => {
		setIsModalOpen(isOpen);
	};

	useEffect(() => {
		const TIMEOUT_WAIT = 10000;
		const isFirstVisit = sessionStorage.getItem('firstVisit') === null;
		if (isFirstVisit) {
			const timeoutId = setTimeout(handleOpenQueryModal, TIMEOUT_WAIT);
			sessionStorage.setItem('firstVisit', 'true');
			return () => clearTimeout(timeoutId);
		}
	}, []);

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

export const useQueryModal = () => {
	const context = useContext(QueryModalContext);
	if (!context) {
		throw new Error(
			'useQueryModal must be used within a QueryModalProvider'
		);
	}
	return context;
};
