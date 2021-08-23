import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    subtitle1: {
      fontSize: 30,
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: "bold",
      fontSize: "1.6rem",
    },

    body2: {
      color: "#b0b9d4",
      lineHeight: 4,
    },
    button: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: "none",
      letterSpacing: 1,
      fontWeight: "bold",
    },
  },

  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
    MuiButton: {
      containedPrimary: {
        padding: "15px 0",
        width: "10rem",
      },
      containedSecondary: {
        padding: "15px 0",
        width: "10rem",
        color: "#3A8DFF",
        boxShadow: "0px 0px 8px 3px rgba(0,0,0,0.35)",
      },
    },
    MuiTypography: {},
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#ffffff" },
  },
});
