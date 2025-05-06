import { useState } from "react";
import { LoginStatusContext } from "./LoginStatusContext";

function LoginStatusProvider({ children }) {
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

export default LoginStatusProvider;
