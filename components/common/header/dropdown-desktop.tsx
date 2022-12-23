import { INavigation } from '@/models/navigation';
import { Container, Box, Menu, MenuItem } from '@mui/material';
import clsx from 'clsx';
import { MenuItems } from './menu-items';

export interface IDropdownDesktopProps {
	menuChildrens: INavigation[];
	dropdown: boolean;
	depthLevel: number;
}

export function DropdownDesktop(props: IDropdownDesktopProps) {

	let { menuChildrens, dropdown, depthLevel } = props;

	depthLevel = depthLevel + 1;

	return (
		<Box className={clsx('dropdown', depthLevel > 1 && 'dropdown-submenu', dropdown && 'show', depthLevel == 1 && 'pt-4')}>
			<Box className='bg-[#D8C3A5]'>
				{menuChildrens.map((submenu: INavigation) => (
					<MenuItems key={submenu.id} item={submenu} depthLevel={depthLevel} />
				))}
			</Box>
		</Box>
	);
}
