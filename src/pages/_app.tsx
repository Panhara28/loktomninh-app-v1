import "bootstrap/dist/css/bootstrap.min.css";
import { clientRequireToken } from "lib/apollo";
import Router from "next/router";
import NProgress from "nprogress";
import React, { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../contexts/app/AppContext";
import { GlobalStyles } from "../utils/globalStyles";
import { theme } from "../utils/theme";
import { ApolloProvider } from "@apollo/client/";
import TokenContext from "@context/app/Token";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "@context/app/Auth";
import { LoginContext } from "@context/app/LoginContext";
import "../styles/main.scss";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }: any) => {
  let Layout = Component.layout || Fragment;
  const [token, setToken] = useState(
    process.browser ? localStorage.getItem("token") : null
  );
  const [isLogin, setIsLogin] = useState(false);
  const client = clientRequireToken(token);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ApolloProvider client={client}>
          <TokenContext.Provider value={{ token, setToken }}>
            <CartProvider>
              <AuthProvider>
                <LoginContext.Provider value={{ isLogin, setIsLogin }}>
                  <AppProvider>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </AppProvider>
                </LoginContext.Provider>
              </AuthProvider>
            </CartProvider>
          </TokenContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
