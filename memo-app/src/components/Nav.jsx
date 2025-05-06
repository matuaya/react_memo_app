import { useLoginStatus } from "../contexts/useLoginStatus.js";

function Nav() {
  const { isLoggedIn, handleLogin } = useLoginStatus();

  return (
    <div className="nav">
      <button className="login-button" onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Nav;
