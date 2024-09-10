"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007B3D",
      },
    },
    typography: {
      fontFamily: ["Roboto", "Noto Sans KR"].join(","),
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&&& .MuiInputBase-input": {
              padding: "8px 12px",
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          inputRoot: {
            padding: "0px",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
