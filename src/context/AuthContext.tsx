//AuthContext.tsx
import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({ token: null, login() {}, logout() {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem("token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    // sessionStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    // sessionStorage.removeItem("token");
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
  // if (context === undefined) {
  //   throw new Error("useAuth must be used within an AuthProvider");
  // }
};
