import { Auth } from '@/components/auth';
import { IlayoutProps } from '@/models/common';
import Link from 'next/link';

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
