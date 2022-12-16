import { Box, Container, Stack, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export interface IHeaderDesktopProps {
    // isMobile: boolean
}

export function HeaderDesktop(props: IHeaderDesktopProps) {

    // const router = useRouter()

    return (
        <Box sx={{ bgcolor: 'white' }}>
            <Stack direction='column' justifyContent='center' alignItems='center' width='100%' height='100%'>
                <Container maxWidth='lg'>        
                    <Stack sx={{ bgcolor: 'white' }} direction='row' width='100%'>
                        <div>Logo</div>
                        <div>Tìm kiếm</div>
                        <button>Đăng nhập</button>
                    </Stack>
                </Container>
                <Box sx={{ bgcolor: 'primary.main' }} width='100%'>
                    <Container maxWidth='lg'>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
                            <Stack direction='row' justifyContent='flex-end' alignItems='center' display={{ xs: 'none', md: 'flex' }} flexGrow='1' className="p-5">
                                <Link href='/' passHref legacyBehavior><MuiLink>Trang chủ</MuiLink></Link>
                                <Link href='/' passHref legacyBehavior><MuiLink>Tin bài</MuiLink></Link>
                                <Link href='/' passHref legacyBehavior><MuiLink>Đơn hàng</MuiLink></Link>
                            </Stack>
                            <button>Thông báo</button>
                        </Stack>
                    </Container>
                </Box>
            </Stack>
        </Box>
    );
}