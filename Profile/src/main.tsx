import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";
import { SiderBarContext } from "./context/useContext.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SiderBarContext>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </SiderBarContext>
  </React.StrictMode>
);
