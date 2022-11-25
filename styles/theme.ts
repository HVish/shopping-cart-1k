import { createTheme } from './utils';

const theme = createTheme({
  spacing: 4,
  variables: {
    mainContentWidth: 1196,
  },
  palette: {
    primary: {
      light: '#42a5f5',
      main: '#1976d2',
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
    background: {
      default: '#f3f3f3',
      paper: '#ffffff',
    },
    typography: {
      primary: '#1a2027',
      secondary: '#6f7e8c',
    },
  },
});

export default theme;
