import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SingIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import WellcomePage from "./pages/Wellcome/WellcomePage";
import { UserStorage } from "./contexts/UserContext";
import SelectCampusPage from "./pages/SignUp/SelectCampus/SelectCampusPage";
import Header from "./components/Header";
import SmothScroll from "./components/SmothScroll";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <SmothScroll>
            <Header />
            <Routes>
              <Route path="/" element={<WellcomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/conta" element={<WellcomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/select-campus" element={<SelectCampusPage />} />
            </Routes>
          </SmothScroll>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
