'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = 'uljr9x5t4c';

export default function MicrosoftClarity() {
	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			try {
				Clarity.init(CLARITY_PROJECT_ID);
			} catch (error) {
				console.error('Failed to initialize Microsoft Clarity:', error);
			}
		}
	}, []);

	return null;
}
