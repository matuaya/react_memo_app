import { useState } from "react";
import { LoginStatusContext } from "./LoginStatusContext";

function LoginStatusProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <LoginStatusContext.Provider value={{ isLoggedIn, handleLogIn }}>
      {children}
    </LoginStatusContext.Provider>
  );
}

export default LoginStatusProvider;
