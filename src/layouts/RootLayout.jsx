import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';

export default function RootLayout() {
  const theme = useTheme();
  return (
    <Box
      className="root-layout"
      sx={{ bgcolor: theme.palette.background.default }}
    >
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
