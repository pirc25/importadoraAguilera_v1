import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/**
 * TEMA GLOBAL DE IMPORTADORA AGUILERA
 * 
 * Este archivo contiene todas las variables de diseño globales.
 * Puedes personalizar fácilmente colores, tipografía y espaciado aquí.
 */

// VARIABLES DE COLOR - Edita aquí para cambiar la paleta
const COLORS = {
  primary: {
    main: '#0A2351', // Azul marino profundo - confianza y profesionalismo
    light: '#1E3A5F',
    dark: '#051629',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#FFFFFF',
    light: '#F8F9FA',
    dark: '#E9ECEF',
    contrastText: '#0A2351',
  },
  accent: {
    main: '#D4AF37', // Oro - tradición y calidad
    light: '#E6C965',
    dark: '#B8941F',
  },
  success: {
    main: '#2E7D32',
    light: '#4CAF50',
  },
  text: {
    primary: '#212529',
    secondary: '#495057',
    disabled: '#ADB5BD',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F8F9FA',
  },
  divider: 'rgba(10, 35, 81, 0.12)',
};

// TIPOGRAFÍA - Cambia las fuentes aquí
const TYPOGRAPHY = {
  fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  displayFont: '"Montserrat", "Poppins", sans-serif', // Para títulos grandes
  
  h1: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 800,
    fontSize: '3.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    fontSize: '2.75rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.4,
  },
  h5: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },
  h6: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.7,
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    fontWeight: 400,
  },
  button: {
    fontWeight: 600,
    textTransform: 'none' as const,
    letterSpacing: '0.02em',
  },
};

// SOMBRAS PERSONALIZADAS
const SHADOWS = {
  card: '0 4px 20px rgba(10, 35, 81, 0.08)',
  cardHover: '0 8px 30px rgba(10, 35, 81, 0.15)',
  button: '0 4px 14px rgba(10, 35, 81, 0.15)',
  header: '0 2px 8px rgba(10, 35, 81, 0.06)',
};

// ESPACIADO
const SPACING = 8; // Base: 8px

// Crear el tema
let theme = createTheme({
  palette: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    success: COLORS.success,
    text: COLORS.text,
    background: COLORS.background,
    divider: COLORS.divider,
  },
  typography: TYPOGRAPHY,
  spacing: SPACING,
  shape: {
    borderRadius: 12, // Bordes redondeados modernos
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: SHADOWS.button,
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: SHADOWS.button,
          },
        },
        sizeLarge: {
          padding: '16px 40px',
          fontSize: '1.125rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: SHADOWS.card,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: SHADOWS.cardHover,
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.3s ease',
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: COLORS.primary.light,
              },
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: SHADOWS.header,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});

// Hacer la tipografía responsive
theme = responsiveFontSizes(theme);

// Exportar variables adicionales para uso directo
export const colors = COLORS;
export const shadows = SHADOWS;
export const typography = TYPOGRAPHY;

export default theme;
