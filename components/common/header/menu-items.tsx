import { INavigation } from '@/models/navigation';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import { Box, Link as MuiLink, Stack } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DropdownDesktop } from './dropdown-desktop';

export interface IMenuItemsProps {
    item: INavigation,
    depthLevel: number;
}

export function MenuItems(props: IMenuItemsProps) {
    
    const { item, depthLevel } = props;

    const router = useRouter();
    const [dropdown, setDropdown] = useState<boolean>(false);

    const onMouseEnter = () => {
        window.innerWidth > 600 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 600 && setDropdown(false);
    };

    return (
        <Box
            className={clsx('relative p-3 cursor-pointer hover:bg-[#c2af94] font-bold w-32 flex justify-center', router.pathname === item.path && 'bg-[#c2af94]' )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {
                item.children ? (
                    <Box>
                        <MuiLink
                            className='cursor-pointer'
                        >
                            { depthLevel > 0 ? (
                                <Stack direction='row' justifyContent='center' alignItems='center'>
                                    <ArrowLeftRoundedIcon />
                                    <Box>{item.title}</Box>
                                </Stack>
                            ) : (
                                <Stack direction='row' justifyContent='center' alignItems='center'>
                                    <Box>{item.title}</Box>
                                    <ArrowDropDownRoundedIcon />
                                </Stack>
                            )}
                        </MuiLink>
                        <DropdownDesktop
                            depthLevel={depthLevel}
                            menuChildrens={item.children}
                            dropdown={dropdown}
                        />
                    </Box>
                ) : (
                    <Link href={item.path} passHref legacyBehavior>
                        <MuiLink className={clsx({ active: router.pathname === item.path })}>{item.title}</MuiLink>
                    </Link>
                )
            }
        </Box>
    )
}
