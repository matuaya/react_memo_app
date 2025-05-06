import MemoApp from "./components/MemoApp.jsx";
import Nav from "./components/Nav.jsx";
import { LoginStatusProvider } from "./hooks/useLoginStatus.jsx";

function App() {
  return (
    <div className="wrapper">
      <LoginStatusProvider>
        <Nav />
        <MemoApp />
      </LoginStatusProvider>
    </div>
  );
}

export default App;
