import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #313131, #0d0d0d);',
        marginBottom: 'calc(75px + 40px)',
      }}
    >
      <Container className="Hero">
        <Grid
          className="hero"
          container
          justifyContent={'center'}
          alignItems={'start'}
          flexDirection={'column'}
          gap={3}
          sx={{
            minHeight: '292px',
            transform: ' translateY(75px)',
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="primary.contrastTextOpacity">
              Location
            </Typography>
            <Stack direction="row" spacing={1} alignItems={'center'}>
              <Typography variant="h6" color="primary.contrastText">
                Stockholm, Sweden
              </Typography>
              <IconButton aria-label="delete" sx={{ color: 'white' }}>
                <ExpandMoreIcon />
              </IconButton>
            </Stack>
          </Box>
          <SearchBar />
          <Banner />
        </Grid>
      </Container>
    </Box>
  );
}
