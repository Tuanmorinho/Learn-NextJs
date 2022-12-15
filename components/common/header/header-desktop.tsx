import { Box, Container, Stack } from "@mui/material";

export interface IHeaderDesktopProps {}

export function HeaderDesktop(props: IHeaderDesktopProps) {
  return (
    <Box sx={{ bgcolor: 'secondary.main' }}>
        <Container maxWidth='lg'>
            <Stack direction='column' justifyContent='center' alignItems='center' width='100%' height='100%'>
                <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
                    <div>Logo</div>
                    <Stack direction='row' justifyContent='flex-end' alignItems='center' display={{ xs: 'none', md: 'flex' }} flexGrow='1' className="p-5">
                        <Box>Trang chủ</Box>
                        <Box>Tin bài</Box>
                        <Box>Đơn hàng</Box>
                    </Stack>
                    <button>Thông báo</button>
                </Stack>
                <Stack direction='row' width='100%'>
                    <div>Tìm kiếm</div>
                    <button>Đăng nhập</button>
                </Stack>
            </Stack>
        </Container>
    </Box>
  );
}