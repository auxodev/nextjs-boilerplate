import { createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
    },
    secondary: {
      light: "#000000",
      main: "#ffffff",
      dark: "#ffffff",
    },
  },
  
  shadows: Array(25).fill("none") as Shadows,
});
export default theme;