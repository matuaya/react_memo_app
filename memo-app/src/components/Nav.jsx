import { useLoginStatus } from "../contexts/useLoginStatus.js";

function Nav() {
  const { isLoggedIn, handleLogIn } = useLoginStatus();

  return (
    <div className="nav">
      <button className="login-button" onClick={handleLogIn}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Nav;
