"use client";
import { createTheme } from "@mui/material";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import localFont from "next/font/local";
import { prefixer } from "stylis";

const IranYekanFont = localFont({
  src: [
    {
      path: "./fonts/Qs_Iranyekan.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Qs_Iranyekan_medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Qs_Iranyekan_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
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
        root: {
          "&.MuiButton-textInherit": {
            color: "#1A1B1C",
          },
        },
        contained: {
          color: "#FFFFFF",
        },
        text: {
          color: "#1A1B1C",
        },
        outlined: {
          color: "#1A1B1C",
          borderColor: "#1A1B1C",
          "&:hover": {
            borderColor: "#1A1B1C",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9CDCF",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9CDCF",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9CDCF",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#C9CDCF",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9CDCF",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before, &:after": {
            borderBottomColor: "#C9CDCF",
          },
          "&:hover:before": {
            borderBottomColor: "#C9CDCF",
          },
          "&.Mui-focused:after": {
            borderBottomColor: "#C9CDCF",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C9CDCF",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: "#C9CDCF",
        },
        outlined: {
          borderColor: "#C9CDCF",
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
