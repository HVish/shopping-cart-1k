import { createTheme } from './utils';

const theme = createTheme({
  spacing: 4,
  variables: {
    navHeight: 90,
    footerHeight: 145,
    mainContentWidth: 1140,
  },
  palette: {
    primary: {
      light: '#02c1f6',
      main: '#1976d2', // 02C1F6
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
      contrastText: '#ffffff',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    grey: {
      light: '#ebebeb',
      main: '#6e6e6e',
      dark: '#929292',
      contrastText: '#ffffff',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    background: {
      default: '#f3f3f3',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a2027',
      secondary: '#6f7e8c',
    },
  },
});

export default theme;
