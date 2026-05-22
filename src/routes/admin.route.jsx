import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import RegisterObjectPage from "../pages/RegisterObject/RegisterObjectPage";
import ObjectDetailsPage from "../pages/ObjectDetails/ObjectDetailsPage";
import ObjectControlPage from "../pages/ObjectControl/ObjectControlPage";
import { UserStorage } from "../contexts/UserContext";
import SignInPage from "../pages/SingIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";

function AdminRoutes() {
  return (
    <>
      <UserStorage>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/register-object" element={<RegisterObjectPage />} />
            <Route path="/objects-control" element={<ObjectControlPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </UserStorage>
    </>
  );
}

export default AdminRoutes;
