import { Container, Box } from '@mui/material';

export interface IHeaderMobileProps {}

export function HeaderMobile(props: IHeaderMobileProps) {
	return (
		<Container maxWidth="lg">
			<Box display={{ xs: 'block', md: 'none' }}>Header Mobile</Box>
		</Container>
	);
}
