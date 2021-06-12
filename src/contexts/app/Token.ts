import { createContext } from "react";

interface TokenProps {
  token: string
  setToken: any
}

const TokenContext = createContext<TokenProps>({
  token: "",
  setToken: () => {}
});

export default TokenContext;