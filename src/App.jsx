import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SingIn/SignInPage";
import WellcomePage from "./pages/Wellcome/WellcomePage";
import { UserStorage } from "./contexts/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<WellcomePage />} />
            <Route path="/signIn/" element={<SignInPage />} />
            <Route path="/conta" element={<WellcomePage />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
