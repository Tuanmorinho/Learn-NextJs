import { Paper, useTheme } from '@mui/material';
import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';

export function Header() {
	const theme = useTheme();
	const isMobile: boolean = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<>
			<Paper
				sx={{ position: 'fixed', right: 0, left: 0 }}
				className={clsx(isMobile ? 'bottom-0' : 'top-0')}
				elevation={3}
			>
				{isMobile ? <HeaderMobile /> : <HeaderDesktop isMobile={isMobile} />}
			</Paper>
			<Paper
				sx={{ position: 'fixed', right: 0, left: 0 }}
				className={clsx(isMobile && 'top-0')}
				elevation={3}
			>
				{isMobile && <HeaderDesktop isMobile={isMobile} />}
			</Paper>
		</>
	);
}
