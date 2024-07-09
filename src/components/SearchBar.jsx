import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import magIcon from '../assets/mag.svg';
import shiftIcon from '../assets/shift.svg';

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #313131, #0d0d0d)',
  padding: '20px',
  borderRadius: '14px',
};

const searchIconStyle = {
  color: 'white',
  marginRight: '10px',
  fontSize: '18px',
};

const searchInputStyle = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'white',
  fontSize: '16px',
  width: '100%',
};

export default function SearchBar() {
  return (
    <Stack direction="row" spacing={2} alignItems={'center'}>
      <Box className="search-container" style={searchContainerStyle}>
        <img style={searchIconStyle} src={magIcon} alt="Shift Icon" />

        <input
          style={searchInputStyle}
          type="text"
          className="search-input"
          placeholder="Search coffee"
        />
      </Box>
      <Button
        variant="contained"
        sx={{ width: 63, height: 63, borderRadius: '14px' }}
      >
        <img src={shiftIcon} alt="Shift Icon" />
      </Button>
    </Stack>
  );
}
