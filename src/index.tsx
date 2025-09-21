import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { NavProvider } from "./context/NavContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
    <NavProvider>
    <App />
    </NavProvider>
    </ThemeProvider>
  </BrowserRouter>
);
