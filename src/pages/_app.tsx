import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../utils/globalStyles";
import { theme } from "../utils/theme";
import "../styles/main.scss";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }: any) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Component {...pageProps} />

      </ThemeProvider>
    </>
  );
};

export default App;
