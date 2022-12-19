import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models/common';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
	return (
		<Box sx={{ bgcolor: 'secondary.light' }} height='100vh'>Home Page</Box>
	);
}

Home.Layout = MainLayout

export default Home