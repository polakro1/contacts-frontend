import { createContext, useContext, useEffect, useState } from "react";
import { checkIsLoggedIn } from "../services/UserService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkIsLoggedIn().then((res) => setIsLoggedIn(res.isLoggedIn));
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
