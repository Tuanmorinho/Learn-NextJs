import { EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface IlayoutProps {
	children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
	Layout?: (props: IlayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
	emotionCache?: EmotionCache
};
