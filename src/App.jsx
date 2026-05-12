import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignInPage from "./pages/SingIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import WellcomePage from "./pages/Wellcome/WellcomePage";
import { UserStorage } from "./contexts/UserContext";
import SelectCampusPage from "./pages/SignUp/SelectCampus/SelectCampusPage";
import Header from "./components/Header";
import SmothScroll from "./components/SmothScroll";
import NewLostItemPage from "./pages/NewLostItem/NewLostItemPage";
import HomePage from "./pages/Home/HomePage";
import ObjectDetailsPage from "./pages/ObjectDetails/ObjectDetailsPage";
import MyRoutes from "./routes";

function App() {
  return (
    <>
      <MyRoutes />
      {/* <Route path="/select-campus" element={<SelectCampusPage />} />
              <Route path="/home" element={<WellcomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/lost" element={<NewLostItemPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/object" element={<ObjectDetailsPage />} />

              <Route path="*" element={<ObjectDetailsPage />} /> */}
    </>
  );
}

export default App;
