import { useQuery } from "@apollo/client";
import { GET_CUSTOMER_LOGGED } from "lib/graph";
import LoginPage from "pages/login";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext<{ customer?: any; onLogin: any }>({
  onLogin: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const { data, loading, refetch } = useQuery(GET_CUSTOMER_LOGGED);

  if (loading || data === undefined) return <></>;

  return (
    <AuthContext.Provider
      value={{ customer: data?.customerLogged, onLogin: refetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectedRoute = ({ children }) => {
  const { customer } = useContext(AuthContext);

  if (!customer) return <LoginPage />;

  return children;
};
