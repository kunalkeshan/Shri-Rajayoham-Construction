'use client';

import React, { useState } from 'react';
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
import { RotateCw, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { submitContactFormDetails } from '@/services/contact';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

type ServicesRequiredFormProps = React.ComponentProps<'section'>;

const formSchema = defaultFormSchemaUnion().and(
	z.object({
		address: z.string().min(3, {
			message: 'Address should be at least 3 characters long.',
		}),
	})
);

const ServicesRequiredForm: React.FC<ServicesRequiredFormProps> = ({
	className,
	...props
}) => {
	const [submitting, setSubmitting] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phoneNumber: '',
			address: '',
			message: '',
		},
	});
	async function onSubmit(values: z.infer<typeof formSchema>) {
		setSubmitting(true);
		setStatus('idle');
		try {
			const sent = await submitContactFormDetails(
				'services-required',
				values
			);
			if (sent) {
				setStatus('success');
			} else {
				setStatus('error');
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				switch (error.response?.data.message) {
					case 'contact/recent-form-submission': {
						toast.error(
							'You have recently submitted a form. Please try again later.'
						);
						break;
					}
					default: {
						break;
					}
				}
			}
			setStatus('error');
		} finally {
			setSubmitting(false);
		}
	}
	return (
		<section className={cn('', className)} {...props}>
			<Form {...form}>
				{status !== 'idle' ? (
					<Alert
						variant={status === 'error' ? 'destructive' : 'success'}
						className='mb-4'
					>
						<Terminal className='h-4 w-4' />
						<AlertTitle className='capitalize'>{status}</AlertTitle>
						<AlertDescription>
							{status === 'error'
								? 'An error occurred while submitting the form. Please try again.'
								: 'Form submitted successfully.'}
						</AlertDescription>
					</Alert>
				) : null}
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='grid grid-cols-1 lg:grid-cols-3 gap-4'
				>
					<FormField
						control={form.control}
						name='name'
						disabled={submitting}
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
						disabled={submitting}
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
						disabled={submitting}
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
						name='address'
						disabled={submitting}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Your address...'
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
						disabled={submitting}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Service Required</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Your service request in detail...'
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
						disabled={submitting}
					>
						{submitting ? (
							<RotateCw
								className='mr-2 animate-spin'
								strokeWidth={1.5}
								size={20}
							/>
						) : null}
						Submit
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default ServicesRequiredForm;
