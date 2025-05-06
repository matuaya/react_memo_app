import { useState, createContext, useContext } from "react";

const LoginStatusContext = createContext(null);

export function LoginStatusProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <LoginStatusContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </LoginStatusContext.Provider>
  );
}

export function useLoginStatus() {
  return useContext(LoginStatusContext);
}
