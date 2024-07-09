import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import bannerImg from '../assets/banner.png';
import mainBanner from '../assets/main-banner.png';

export default function Banner() {
  return (
    <img src={mainBanner} alt="" style={{ width: '100%' }} />
    // <Box
    //   sx={{
    //     width: '100%',
    //     bgcolor: '#947257',
    //     borderRadius: '14px',
    //     padding: '14px 25px',
    //     boxSizing: 'border-box',
    //     backgroundImage: `url(${bannerImg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '147px',
    //   }}
    // >
    //   <Stack direction={'column'}>
    //     <Typography variant="body1" color="primary.contrastText">
    //       Promo
    //     </Typography>
    //     <Typography variant="h4" color="primary.contrastText">
    //       Buy One Get One Free
    //     </Typography>
    //   </Stack>
    // </Box>
  );
}
