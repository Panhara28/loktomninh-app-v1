import React, { PropsWithChildren, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import TokenContext from "@context/app/Token";
import { clientRequireToken } from "lib/apollo";
import { CartProvider } from "react-use-cart";
import { AuthProvider } from "@context/app/Auth";
import { LoginContext } from "@context/app/LoginContext";
import { AppProvider } from "@context/app/AppContext";

export default function PageContent(props: PropsWithChildren<{}>) {
  const [token, setToken] = useState(
    process.browser ? localStorage.getItem("token") : null
  );
  const [isLogin, setIsLogin] = useState(false);
  const client = clientRequireToken(token);
  return (
    <ApolloProvider client={client}>
      <TokenContext.Provider value={{ token, setToken }}>
        <CartProvider>
          <AuthProvider>
            <LoginContext.Provider value={{ isLogin, setIsLogin }}>
              <AppProvider>
                {props.children}
              </AppProvider>
            </LoginContext.Provider>
          </AuthProvider>
        </CartProvider>
      </TokenContext.Provider>
    </ApolloProvider>
  )
}