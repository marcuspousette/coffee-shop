export const getTheme = (mode) => ({
  typography: {
    fontFamily: [
      '-apple-system',
      'Sora',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#C67C4E',
            light: '#edd6c8',
            dark: '#313131',
            contrastText: '#fff',
            contrastTextOpacity: '#ffffff60',
          },
          secondary: {
            main: '#E3E3E3',
          },
          background: {
            default: '#F2F2F2',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#C67C4E',
          },
          secondary: {
            main: '#9c27b0',
          },
          background: {
            default: '#202c36',
            paper: '#2B3844',
          },
        }),
  },
});
