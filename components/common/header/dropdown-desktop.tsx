import { INavigation } from '@/models/navigation';
import { Container, Box, Menu, MenuItem } from '@mui/material';
import { MenuItems } from './menu-items';

export interface IDropdownDesktopProps {
	menuChildrens: INavigation[];
	dropdown: boolean;
	depthLevel: number;
}

export function DropdownDesktop(props: IDropdownDesktopProps) {

	let { menuChildrens, dropdown, depthLevel } = props;

	depthLevel = depthLevel + 1;
	const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

	return (
		<Box className={`pt-3 dropdown ${dropdownClass} ${props.dropdown ? "show" : ""}`}>
			<Box className='bg-[#D8C3A5] border-t-2'>
				{props.menuChildrens.map((submenu: INavigation) => (
					<MenuItems key={submenu.id} item={submenu} depthLevel={depthLevel} />
				))}
			</Box>
		</Box>
	);
}
