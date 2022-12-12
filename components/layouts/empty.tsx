import { IlayoutProps } from '@/models/common';
import React from 'react';

export function EmptyLayout(props: IlayoutProps) {
    const { children } = props
    
	return (
		<>{ children }</>
	);
}
