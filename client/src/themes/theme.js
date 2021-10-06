import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "OpenSans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
        fontSize: "20px",
        letterSpacing: "2px",
        height: "30px"
      }
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
