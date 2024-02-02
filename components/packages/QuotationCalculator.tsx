'use client';

import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';

const costFormatter = (num: number) =>
	new Intl.NumberFormat('en-IN', {
		notation: 'standard',
		style: 'currency',
		currency: 'INR',
	}).format(num);

const RATES = {
	area: 2250,
	waterSump: 18,
	septicTank: 18,
	compoundWall: 425,
};

const QuotationCalculator = () => {
	const [total, setTotal] = useState(0);
	const [inputs, setInputs] = useState({
		area: 0,
		waterSump: 0,
		septicTank: 0,
		length: 0,
		height: 0,
	});

	const handleChange =
		(name: keyof typeof inputs) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setInputs((prevInputs) => ({
				...prevInputs,
				[name]: event.target.value,
			}));
		};

	const calculateCompoundWall = (): number => {
		if (Number(inputs.length) && Number(inputs.height)) {
			return (
				Number(inputs.length) *
				Number(inputs.height) *
				RATES.compoundWall
			);
		} else {
			return 0;
		}
	};

	const calculateArea = (): number => {
		return Number(inputs.area) * RATES.area;
	};

	const calculateWaterSump = (): number => {
		return Number(inputs.waterSump) * RATES.waterSump;
	};

	const calculateSepticTank = (): number => {
		return Number(inputs.septicTank) * RATES.septicTank;
	};

	const calculateTotal = (): number => {
		return (
			calculateCompoundWall() +
			calculateArea() +
			calculateWaterSump() +
			calculateSepticTank()
		);
	};

	useEffect(() => {
		calculateArea();
		calculateCompoundWall();
		calculateSepticTank();
		calculateWaterSump();
		setTotal(calculateTotal());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputs]);

	return (
		<Table className='rounded-lg'>
			<TableCaption className='pb-4'>
				Total Construction Cost{' '}
				<span className='font-bold text-xl'>
					{costFormatter(total)}
				</span>
			</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className=' min-w-[100px] text-center'>
						Sl. No
					</TableHead>
					<TableHead className='min-w-[160px] text-center'>
						Work
					</TableHead>
					<TableHead className='min-w-[300px] text-center'>
						Area
					</TableHead>
					<TableHead className='text-center'>Unit</TableHead>
					<TableHead className='text-center min-w-[200px]'>
						Rate
					</TableHead>
					<TableHead className='text-center'>Cost</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className='font-medium text-center'>1</TableCell>
					<TableCell className='text-center'>
						Enter The Total Required Built Up Area All Floors
						Including Headroom{' '}
					</TableCell>
					<TableCell>
						<Input
							type='number'
							min={0}
							onChange={handleChange('area')}
							placeholder='Area in Sq.Ft'
						/>
					</TableCell>
					<TableCell className='text-center'>Sq.Ft</TableCell>
					<TableCell className='text-center'>
						<div>₹ {RATES.area}</div>
					</TableCell>
					<TableCell className='text-center'>
						<div>{costFormatter(calculateArea())}</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='font-medium text-center'>2</TableCell>
					<TableCell className='text-center'>
						Size Of RCC Water Sump
					</TableCell>
					<TableCell>
						<Input
							type='number'
							min={0}
							onChange={handleChange('waterSump')}
							placeholder='No. of Liters'
						/>
					</TableCell>
					<TableCell className='text-center'>Liters</TableCell>
					<TableCell className='text-center'>
						<div>₹ {RATES.waterSump}</div>
					</TableCell>
					<TableCell className='text-center'>
						<div>{costFormatter(calculateWaterSump())} </div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='font-medium text-center'>3</TableCell>
					<TableCell className='text-center'>
						Size Of Septic Tank
					</TableCell>
					<TableCell>
						<Input
							type='number'
							min={0}
							onChange={handleChange('septicTank')}
							placeholder='No. of Liters'
						/>
					</TableCell>
					<TableCell className='text-center'>Sq.Ft</TableCell>
					<TableCell className='text-center'>
						<div>₹ {RATES.septicTank}</div>
					</TableCell>
					<TableCell className='text-center'>
						<div>{costFormatter(calculateSepticTank())} </div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className='font-medium text-center'>4</TableCell>
					<TableCell className='text-center'>
						Plain Compound Wall
					</TableCell>
					<TableCell className='flex gap-4'>
						<Input
							type='number'
							min={0}
							onChange={handleChange('length')}
							placeholder='Length'
						/>
						<Input
							type='number'
							min={0}
							onChange={handleChange('height')}
							placeholder='Height'
						/>
					</TableCell>
					<TableCell className='text-center'>Sq.Ft</TableCell>
					<TableCell className='text-center'>
						<div>₹ {RATES.compoundWall}</div>
					</TableCell>
					<TableCell className='text-center'>
						<div>{costFormatter(calculateCompoundWall())}</div>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default QuotationCalculator;
