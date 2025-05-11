import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ThemeProvider } from "@mui/material/styles"; 
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from "./theme";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>;
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider  theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
