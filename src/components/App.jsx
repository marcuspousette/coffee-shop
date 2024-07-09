import './App.css';
import { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RootLayout from '../layouts/RootLayout';
import { getTheme } from '../utils/theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} errorElement={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export const ColorModeContext = createContext({});

function App() {
  const [mode, setMode] = useState('light');

  const context = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }));

  const theme = createTheme(getTheme(mode));

  return (
    <ColorModeContext.Provider value={context}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
