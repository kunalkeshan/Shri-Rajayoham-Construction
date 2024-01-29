'use client';

import React from 'react';
import { cn, defaultFormSchemaUnion } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

type CareersFormProps = React.ComponentProps<'section'> & {
	careers: Array<SRCC_Career>;
};

const formSchema = defaultFormSchemaUnion(z.object({}));

const CareersForm: React.FC<CareersFormProps> = ({
	className,
	careers,
	...props
}) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phoneNumber: '',
			message: '',
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<section className={cn('w-full', className)} {...props}>
			{careers && careers.length > 0 ? (
				<div className=''>
					<h3 className='text-2xl font-bold'>Open Positions</h3>
					<ul className='w-full mt-4'>
						{careers.map((career) => (
							<li key={career._id} className='w-full border-b'>
								<Link
									href={`/careers/${career.slug}`}
									className='w-full flex items-center justify-between font-medium pb-1 group'
								>
									<p className='group-hover:underline'>
										{career.role.name} -{' '}
										{career.position.name}
									</p>
									<p className='text-blue-500 group-hover:underline decoration-blue-500'>
										{career.location}
									</p>
								</Link>
							</li>
						))}
					</ul>
					<h3 className='mt-8 mb-8 text-2xl font-bold'>
						Interested in something unique? Let us know.
					</h3>
				</div>
			) : null}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid grid-cols-1 lg:grid-cols-3 gap-4'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder='John Doe' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='doe@gmail.com'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phoneNumber'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										placeholder='9876543210'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem className='lg:col-span-2'>
								<FormLabel>About</FormLabel>
								<FormControl>
									<Textarea
										placeholder='A few words about yourself, attached with your resume link (drive link / other) and relevant information attached here...'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className='lg:col-span-3 lg:w-fit ml-auto py-6 px-8 bg-app hover:bg-app/90 transition-all duration-300'
						type='submit'
					>
						Submit
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default CareersForm;
