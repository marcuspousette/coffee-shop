import { Box, Typography, Stack, Button, Grid, Paper } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function Card({ name, sub, price, image }) {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3} className="Card">
      <Paper
        sx={{ bgcolor: 'white', borderRadius: '14px', padding: '8px' }}
        elevation={2}
      >
        <Box
          className="Card__image-container"
          sx={{ width: '100%', marginBottom: '10px' }}
        >
          <img
            className="Card__image"
            src={image}
            alt={name}
            style={{ width: '100%', borderRadius: '14px' }}
          />
        </Box>
        <Stack>
          <Typography
            sx={{ fontSize: '22px', color: 'primary.dark' }}
            variant="body1"
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            mb={2}
            sx={{ fontSize: '14px', color: '#3131319e' }}
          >
            {sub}
          </Typography>
          <Button
            endIcon={<AddIcon />}
            variant="contained"
            sx={{
              height: 35,
              borderRadius: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {price} kr
          </Button>
          {/* <Stack
            alignItems={'center'}
            justifyContent={'space-between'}
            direction={'row'}
          >
            <Typography
              sx={{
                fontSize: '22px',
                color: 'primary.dark',
              }}
              variant="body1"
            >
              {price} kr
            </Typography>
          </Stack> */}
        </Stack>
      </Paper>
    </Grid>
  );
}
