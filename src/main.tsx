import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalFonts from "./assets/fonts/fonts.ts";
import { GlobalStyles } from "./globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
