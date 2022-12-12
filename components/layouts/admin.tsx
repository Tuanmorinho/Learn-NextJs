import { IlayoutProps } from '@/models/common';
import Link from 'next/link';
import React from 'react';
import { Auth } from '../common';

export function AdminLayout(props: IlayoutProps) {
	const { children } = props

	return (
		<Auth>
			<div>
				<h1>Admin Layout</h1>
				<Link href="/">Home</Link>
				<Link href="/about">Home</Link>
				<div>
					{children}
				</div>
			</div>
		</Auth>
	);
}
