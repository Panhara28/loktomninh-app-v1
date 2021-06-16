import { useQuery } from "@apollo/client";
import { SEARCH_PRODUCTS } from "lib/graph";
import React, { createContext } from "react";
import { useContext } from "react";

export const ProductContext = createContext<{
  products?: any;
  search?: string;
  setSearch?: (e) => void;
}>({ search: "", setSearch: () => {} });

export const ProductProvider = ({ children }: any) => {
  const { search } = useContext(ProductContext);
  console.log("search", search);

  const { data, loading } = useQuery(SEARCH_PRODUCTS, {
    variables: {
      limit: 20,
      offset: 1,
      search,
    },
  });

  if (loading || data === undefined) return <></>;

  return (
    <ProductContext.Provider
      value={{ products: data?.clientProductSearch, search }}
    >
      {children}
    </ProductContext.Provider>
  );
};
