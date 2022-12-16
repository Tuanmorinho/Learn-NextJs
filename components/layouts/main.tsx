import { IlayoutProps } from '@/models/common';
import { Box, Stack } from '@mui/material';
import { Footer, Header } from '../common';

export function MainLayout(props: IlayoutProps) {

	const { children } = props;

	return (
		<Stack minHeight='100vh'>
			<Box component='main' flexGrow='1'>
				{children}
			</Box>
			<Footer />
			<Header />
		</Stack>
	);
}
