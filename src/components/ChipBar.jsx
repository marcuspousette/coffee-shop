import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const style = {
  borderRadius: '6px',
  fontSize: '15px',
};

export default function ChipBar() {
  const data = [
    { label: 'All coffee', color: 'primary' },
    { label: 'Machiato' },
    { label: 'Latte' },
    { label: 'Americano' },
  ];
  return (
    <Stack
      direction="row"
      spacing={3}
      mb={2}
      sx={{ width: '100%', overflowX: 'auto', paddingBottom: '6px' }}
    >
      {data.map((d, i) => (
        <Chip key={i} {...d} style={style} clickable />
      ))}
    </Stack>
  );
}
