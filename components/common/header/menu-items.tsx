import { INavigation } from '@/models/navigation';
import { useState } from 'react';
import { Box, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { DropdownDesktop } from './dropdown-desktop';

export interface IMenuItemsProps {
    item: INavigation,
    depthLevel: number;
}

export function MenuItems(props: IMenuItemsProps) {

    const [dropdown, setDropdown] = useState<boolean>(false);

    const onMouseEnter = () => {
        window.innerWidth > 400 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 400 && setDropdown(false);
    };

    return (
        <Box
            className='py-3 relative'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {
                props.item.children ? (
                    <Box>
                        <MuiLink
                            className='cursor-pointer'
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {props.item.title}
                        </MuiLink>
                        <DropdownDesktop
                            depthLevel={props.depthLevel}
                            menuChildrens={props.item.children}
                            dropdown={dropdown}
                        />
                    </Box>
                ) : (
                    <Link href={props.item.path} passHref legacyBehavior>
                        <MuiLink>{props.item.title}</MuiLink>
                    </Link>
                )
            }
        </Box>
    )
}
