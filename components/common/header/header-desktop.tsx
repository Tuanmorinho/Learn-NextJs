import { Box, Container, Stack, Input, Link as MuiLink } from '@mui/material';
import clsx from 'clsx';
import { ROUTE_LIST_DESKTOP } from 'mock';
import Link from 'next/link';
import _ from 'lodash';
import { INavigation } from '@/models/navigation';

export interface IHeaderDesktopProps {
	isMobile: boolean;
}

export function HeaderDesktop(props: IHeaderDesktopProps) {

	return (
		<Box sx={{ bgcolor: 'white' }}>
			<Stack direction="column" justifyContent="center" alignItems="center" width="100%" height="100%">
				<Container maxWidth="lg" sx={{ bgcolor: props.isMobile ? 'primary.main' : 'white' }}>
					<Stack direction={ props.isMobile ? 'column' : 'row' } width="100%" className='py-5'>
						<div>Logo</div>
						<Input />
						{ !props.isMobile && <div>Đăng nhập</div> }
					</Stack>
				</Container>
				{!props.isMobile && (
					<Box sx={{ bgcolor: 'primary.main' }} width="100%">
						<Container maxWidth="lg">
							<Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
								<Stack
									direction="row"
									justifyContent="flex-end"
									alignItems="center"
									display={{ xs: 'none', md: 'flex' }}
									flexGrow="1"
									className="p-5"
								>
                                    {
                                        _.cloneDeep(ROUTE_LIST_DESKTOP).map((route, index) => {
                                            <Link key={index} href="/" passHref legacyBehavior>
										        <MuiLink>Trang chủ</MuiLink>
									        </Link>
                                        })
                                    }
									{/* <Link href="/" passHref legacyBehavior>
										<MuiLink>Trang chủ</MuiLink>
									</Link>
									<Link href="/" passHref legacyBehavior>
										<MuiLink>Tin bài</MuiLink>
									</Link>
									<Link href="/" passHref legacyBehavior>
										<MuiLink>Đơn hàng</MuiLink>
									</Link> */}
								</Stack>
								<button>Thông báo</button>
							</Stack>
						</Container>
					</Box>
				)}
			</Stack>
		</Box>
	);
}
