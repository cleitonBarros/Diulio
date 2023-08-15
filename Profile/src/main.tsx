import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";
import { ModalContext, SiderBarContext } from "./context/useContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SiderBarContext>
      <ModalContext>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ModalContext>
    </SiderBarContext>
  </React.StrictMode>
);
