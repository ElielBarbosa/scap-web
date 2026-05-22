import "./App.css";
import MyRoutes from "./routes/index";
import { UserContext, UserStorage } from "./contexts/UserContext";

function App() {
  return (
    <>
      <MyRoutes isLoading />
    </>
  );
}

export default App;
