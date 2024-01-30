"use client";
import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

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
			return Number(inputs.length) * Number(inputs.height) * 425;
		} else {
			return 0;
		}
	};

	const calculateArea = (): number => {
		return Number(inputs.area) * 2250;
	};

	const calculateWaterSump = (): number => {
		return Number(inputs.waterSump) * 18;
	};

	const calculateSepticTank = (): number => {
		return Number(inputs.septicTank) * 18;
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
	}, [inputs]);

	return (
		<Table className="rounded-lg">
			<TableCaption className="pb-4">
				Total Construction Cost{" "}
				<span className="font-bold text-xl">₹ {total}</span>
			</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className=" min-w-[100px] text-center">
						Sl. No
					</TableHead>
					<TableHead className="min-w-[400px] text-center">
						Work
					</TableHead>
					<TableHead className="min-w-[300px] text-center">
						Area
					</TableHead>
					<TableHead className="text-center">Unit</TableHead>
					<TableHead className="text-center min-w-[100px]">
						Rate
					</TableHead>
					<TableHead className="text-center">Cost</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium text-center">1</TableCell>
					<TableCell className="text-center">
						Enter The Total Required Built Up Area All Floors
						Including Headroom{" "}
					</TableCell>
					<TableCell>
						<Input
							type="number"
							min={0}
							onChange={handleChange("area")}
							placeholder="Area in Sq.Ft"
						/>
					</TableCell>
					<TableCell className="text-center">Sq.Ft</TableCell>
					<TableCell className="text-center">
						<div>₹ 2250</div>
					</TableCell>
					<TableCell className="text-center">
						<div>₹ {calculateArea()}</div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium text-center">2</TableCell>
					<TableCell className="text-center">
						Size Of RCC Water Sump
					</TableCell>
					<TableCell>
						<Input
							type="number"
							min={0}
							onChange={handleChange("waterSump")}
							placeholder="No. of Liters"
						/>
					</TableCell>
					<TableCell className="text-center">Liters</TableCell>
					<TableCell className="text-center">
						<div>₹ 18</div>
					</TableCell>
					<TableCell className="text-center">
						<div>₹ {calculateWaterSump()} </div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium text-center">3</TableCell>
					<TableCell className="text-center">
						Size Of Septic Tank
					</TableCell>
					<TableCell>
						<Input
							type="number"
							min={0}
							onChange={handleChange("septicTank")}
							placeholder="No. of Liters"
						/>
					</TableCell>
					<TableCell className="text-center">Sq.Ft</TableCell>
					<TableCell className="text-center">
						<div>₹ 18</div>
					</TableCell>
					<TableCell className="text-center">
						<div>₹ {calculateSepticTank()} </div>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium text-center">4</TableCell>
					<TableCell className="text-center">
						Plain Compound Wall
					</TableCell>
					<TableCell className="flex gap-4">
						<Input
							type="number"
							min={0}
							onChange={handleChange("length")}
							placeholder="Length"
						/>
						<Input
							type="number"
							min={0}
							onChange={handleChange("height")}
							placeholder="Height"
						/>
					</TableCell>
					<TableCell className="text-center">Sq.Ft</TableCell>
					<TableCell className="text-center">
						<div>₹ 425</div>
					</TableCell>
					<TableCell className="text-center">
						<div>₹ {calculateCompoundWall()}</div>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export default QuotationCalculator;
