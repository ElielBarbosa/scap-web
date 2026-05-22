import { Routes, Route } from "react-router-dom";
import { UserStorage } from "../contexts/UserContext";

import SignInPage from "../pages/SingIn/SignInPage";
import SelectCampusPage from "../pages/SignUp/SelectCampus/SelectCampusPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import AppLayout from "../components/AppLayout";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

function AuthRoutes() {
  return (
    <UserStorage>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/selectCampus" element={<SelectCampusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </UserStorage>
  );
}

export default AuthRoutes;
