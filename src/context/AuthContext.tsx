//AuthContext.tsx
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export type AuthContextType = {
  token: string;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({ token: "", login() {}, logout() {} });

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [token, setToken] = useLocalStorage<string>("", "token");

  const login = (newToken: string) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken("");
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
}
