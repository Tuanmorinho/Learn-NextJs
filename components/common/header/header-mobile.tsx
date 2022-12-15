import { Box } from "@mui/material";

export interface IHeaderMobileProps {}

export function HeaderMobile(props: IHeaderMobileProps) {
  return (
    <Box display={{ xs: 'block', md: 'none' }}>Header Mobile</Box>
  );
}