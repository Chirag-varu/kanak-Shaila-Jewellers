import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { addHistory } from "../utils/history.service";

interface User {
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // 🔄 Restore session on refresh
  useEffect(() => {
    const isAuth = sessionStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");

    if (isAuth === "true" && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User) => {
    sessionStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setUser(user);
  };

  const logout = async () => {
  if (user?.email) {
    await addHistory("LOGOUT", user.email);
  }

  sessionStorage.clear();
  localStorage.removeItem("user");
  setIsLoggedIn(false);
  setUser(null);
};


  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
