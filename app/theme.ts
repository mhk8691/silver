"use client";
import { createTheme } from "@mui/material";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import localFont from "next/font/local";
import { prefixer } from "stylis";

export const IranYekanFont = localFont({
  src: [
    {
      path: './fonts/IRANYekanRegularFaNum.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanMediumFaNum.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanExtraBoldFaNum.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-iranyekan',
});

declare module "@mui/material/styles" {
  interface TypeText {
    title: string;
    muted:string
  }
  interface TypeBackground {
    secondary: string;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
  }
}

export const rtl = {
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
};

const theme = createTheme({
  typography: {
    fontFamily: `${IranYekanFont.style.fontFamily}, sans-serif`,
  },
  components: {
       MuiButton: {
      styleOverrides: {
        
        contained: {
          color: "#FFFFFF",
        },
        text: {
          color: "#1A1B1C",
        },
     
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#C9CDCF",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#C9CDCF",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderColor: "#C9CDCF",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#C9CDCF",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      light: "#E2EEF9",
      main: "#6DA9E1",
      dark: "#8ABAE7",
    },
    secondary: {
      main: "#E5C231",
    },
    background: {
      default: "#FFFFFF",
      paper: "#E8EDEF",
      secondary: "#F2F5F6",
    },
    text: {
      primary: "#0F0F10",
      secondary: "#363839",
      title: "#1A1B1C",
      muted:  '#575753',
    },
  },
  direction: "rtl",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
});

export default theme;
