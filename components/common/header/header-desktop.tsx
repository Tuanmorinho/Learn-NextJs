import { INavigation } from '@/models/navigation';
import { Box, Button, Container, Input, Link as MuiLink, Menu, MenuItem, Stack } from '@mui/material';
import _ from 'lodash';
import { ROUTE_LIST_DESKTOP } from 'mock';
import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { MenuItems } from './menu-items';

export interface IHeaderDesktopProps {
    isMobile: boolean;
}

export function HeaderDesktop(props: IHeaderDesktopProps) {

    const { isMobile } = props;

    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Stack direction="column" justifyContent="center" alignItems="center" width="100%" height="100%">
                <Container maxWidth="lg" sx={{ bgcolor: isMobile ? 'primary.main' : 'white' }}>
                    <Stack direction={isMobile ? 'column' : 'row'} width="100%" className='py-5'>
                        <div>Logo</div>
                        <Input />
                        { !isMobile && <div>Đăng nhập</div> }
                        <button>Thông báo</button>
                    </Stack>
                </Container>
                {!isMobile && (
                    <Box sx={{ bgcolor: 'primary.main' }} width="100%">
                        <Container maxWidth="lg">
                            <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    display={{ xs: 'none', md: 'flex' }}
                                    flexGrow="1"
                                    // className="space-x-[2px]"
                                >
                                    {
                                        _.cloneDeep(ROUTE_LIST_DESKTOP).map((menu: INavigation) =>
                                            <MenuItems key={menu.id} item={menu} depthLevel={0} />
                                        )
                                    }
                                </Stack>
                            </Stack>
                        </Container>
                    </Box>
                )}
            </Stack>
        </Box>
    );
}
