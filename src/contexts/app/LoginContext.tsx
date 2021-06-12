import { createContext } from "react";

interface LoginProps {
  isLogin: boolean;
  setIsLogin: any;
}

export const LoginContext = createContext<LoginProps>({
  isLogin: false,
  setIsLogin: () => {},
});
