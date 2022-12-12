import { IlayoutProps } from '@/models/common';
import Link from 'next/link';
import React, { useEffect } from 'react';

export function MainLayout(props: IlayoutProps) {
    const { children } = props

	useEffect(() => {
		console.log('mouting');
		return () => console.log('unmouting');
		
	}, [])
	
    
	return (
		<div>
			<h1>Main Layout</h1>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<div>
                { children }
            </div>
		</div>
	);
}
