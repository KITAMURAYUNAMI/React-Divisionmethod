import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProviders";
function App() {
  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;
