import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/AuthContext";

function useAuth() {
  return useContext<AuthContextType>(AuthContext);
}

export default useAuth;
