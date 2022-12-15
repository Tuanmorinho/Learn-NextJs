import { IlayoutProps } from '@/models/common';
import { Box, Stack, Container } from '@mui/material';
import { Footer, Header } from '../common';

export function MainLayout(props: IlayoutProps) {

	const { children } = props;

	return (
		<Stack minHeight='100vh'>
			<Header />

			<Container maxWidth='sm' sx={{ bgcolor: 'primary.main' }}>
				SM CONTAINER
			</Container>

			<Container sx={{ bgcolor: 'primary.main' }}>
				MD CONTAINER
			</Container>

			<Container maxWidth='lg' sx={{ bgcolor: 'primary.main' }}>
				LG CONTAINER
			</Container>

			<Box component='main' flexGrow='1'>
				{children}
			</Box>
			<Footer />
		</Stack>
	);
}
