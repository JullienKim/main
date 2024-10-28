import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import ReactDOM from "react-dom/client";
import App from "./App";
import App1 from "./App1";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <App1 />
  </ThemeProvider>
);
