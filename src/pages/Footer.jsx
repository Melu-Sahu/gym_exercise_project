import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" pb='20px' bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by <a href='https://github.com/Melu-Sahu' target='_blank'>Melu Sahu </a> <br /> with reference of <a href='https://www.youtube.com/watch?v=KBpoBc98BwM' target='_blank'>Javascripit Mastery</a></Typography>
    <Typography textAlign='center' my='5'>Internal work are different from as video followed. It is using context API Insted of using prop drealing.</Typography>
  </Box>
);

export default Footer;