import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SingIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import WellcomePage from "./pages/Wellcome/WellcomePage";
import { UserStorage } from "./contexts/UserContext";
import SelectCampusPage from "./pages/SelectCampus/SelectCampusPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<WellcomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/conta" element={<WellcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/select-campus" element={<SelectCampusPage />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
