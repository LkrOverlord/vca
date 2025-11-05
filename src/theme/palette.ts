// palette.ts
export const palette = {
  primary: {
    main: "#101828",
    contrastText: "#FFF",
  },
  secondary: {
    main: "#101828",
    contrastText: "#344054",
  },
  // Colores de marca
  brand: {
    50: "#F9FAFB",
    100: "#F5F5F5",
    500: "#667085",
    600: "#475467",
    700: "#424242",
  },
  // Colores de estado
  success: {
    50: "#ECFDF3",
    400: "#32D583",
    600: "#039855",
    700: "#027A48",
  },
  warning: {
    50: "#FFFAEB",
    700: "#B54708",
  },
  error: {
    50: "#FEF3F2",
    600: "#D92D20",
    700: "#B42318",
  },
  // Colores adicionales
  orange: {
    50: "#FFFAEB",
    700: "#B54708",
  },
  blue: {
    50: "#EFF8FF",
    700: "#175CD3",
    600: "#1570EF", // ya existente
  },
  indigo: {
    50: "#EEF4FF",
    700: "#3538CD",
  },
  // Escala de grises - Los más usados
  gray: {
    50: "#F9FAFB",   // Fondo de filas alternas
    100: "#F2F4F7",  // Hover states
    200: "#E4E7EC",
    300: "#D0D5DD",  // Bordes
    400: "#98A2B3",  // Hover states
    500: "#667085",  // Texto placeholder y texto ingresado
    600: "#475467",  // Texto secundario
    700: "#344054",  // Labels y texto principal
    900: "#101828",  // Texto principal oscuro
  },
  green: {
    600: "#039855",
    700: "#027A48",
    500: "#12B76A"
  },
} as const;

// Tipos extendidos para MUI
declare module "@mui/material/styles" {
  interface Palette {
    brand: {
      50: string;
      500: string;
      600: string;
      700: string;
    };
    indigo: {
      50: string;
      700: string;
    };
    // blue: {
    //   600: string;
    // };
    orange: {
      50: string;
      700: string;
    };
    blue: {
      50: string;
      600: string;
      700: string;
    };
    gray: {
      50: string;
      100: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      900: string;
    };
    green: {
      600: string;
      700: string;
      500: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      50?: string;
      500?: string;
      600?: string;
      700?: string;
    };
    indigo?: {
      50?: string;
      700?: string;
    };
    // blue?: {
    //   600?: string;
    // };
    orange?: {
      50?: string;
      700?: string;
    };
    blue?: {
      50?: string;
      600?: string;
      700?: string;
    };
    gray: {
      50?: string;
      100?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      900?: string;
    };
  }
}