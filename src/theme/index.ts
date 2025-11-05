// theme/index.ts
import { createTheme, type ThemeOptions } from '@mui/material/styles';

// import { buttonOverrides } from './components/Button';
import { palette } from './palette';


// Configuración base del tema
const baseThemeConfig: ThemeOptions = {
  palette: {
    // Colores personalizados
    ...palette,
    // Colores estándar requeridos por MUI
    success: {
      main: palette.success[600],
      light: palette.success[50],
      dark: palette.success[700],
      contrastText: '#FFFFFF',
    },
    warning: {
      main: palette.warning[700],
      light: palette.warning[50],
      dark: '#993B05',
      contrastText: '#FFFFFF',
    },
    error: {
      main: palette.error[700],
      light: '#FEF3F2',
      dark: '#912018',
      contrastText: '#FFFFFF',
    },
    info: {
      main: palette.blue[600],
      light: palette.indigo[50],
      dark: '#1849A9',
      contrastText: '#FFFFFF',
    },
    // Configuración de modo (light/dark)
    mode: 'light',
    // Colores de fondo
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    // Colores de texto
    text: {
      primary: palette.secondary.main,
      secondary: palette.brand[500],
      disabled: 'rgba(52, 64, 84, 0.48)',
    },
    // Divisores
    divider: palette.gray[100],
  },
  typography: {
    fontFamily: '"Urbanist", sans-serif',
    // Configuraciones de tipografía más detalladas
    h1: {
      fontSize: '60px',
      fontWeight: 600,
      lineHeight: '72px',
      letterSpacing: '-1.2px',
      color: palette.gray[900],
    },
    h2: {
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: '60px',
      letterSpacing: '-0.96px',
    },
    h3: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: '60px',
      color: palette.gray[900]
    },
    h4: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '32px',
      color: palette.gray[700]
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '30px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '18px',
      color: palette.gray[700],
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '18px',
      color: palette.gray[600],
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '1.25rem',
      color: palette.gray[600],
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1rem',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: '1.25rem',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    // Overrides de componentes
    // MuiButton: buttonOverrides,

    // Configuración global de CssBaseline
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '16px',
        },
        body: {
          fontSize: '1rem',
          lineHeight: '1.5',
          fontFamily: '"Urbanist", sans-serif',
        },
        '*': {
          boxSizing: 'border-box',
        },
        '*:before, *:after': {
          boxSizing: 'border-box',
        },
      },
    },
  },
};

// Crear y exportar el tema
export const theme = createTheme(baseThemeConfig);

// Re-exportar palette para conveniencia
export { palette } from './palette';

// Tipo para el tema personalizado (útil para TypeScript)
export type CustomTheme = typeof theme;