import '@emotion/react';

interface PaletteColor {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

interface ThemePalette {
  primary: PaletteColor;
  success: PaletteColor;
  error: PaletteColor;
  grey: PaletteColor;
  typography: {
    primary: string;
    secondary: string;
  };
  background: {
    default: string;
    paper: string;
  };
}

declare module '@emotion/react' {
  export interface ThemeSpacing {
    (arg1: number): string | number;
    (arg1: number, arg2: number): string | number;
    (arg1: number, arg2: number, arg3: number): string | number;
    (arg1: number, arg2: number, arg3: number): string | number;
    (arg1: number, arg2: number, arg3: number, arg4: number): string | number;
  }

  export interface ThemeOptions {
    palette: ThemePalette;
    spacing: number;
  }

  export interface Theme {
    palette: ThemePalette;
    spacing: ThemeSpacing;
  }
}
