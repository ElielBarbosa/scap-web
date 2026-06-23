import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import HomePage from "../pages/Home/HomePage";
import ObjectDetailsPage from "../pages/ObjectDetails/ObjectDetailsPage";
import SignInPage from "../pages/SingIn/SignInPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import { UserStorage } from "../contexts/UserContext";
import SelectCampusPage from "../pages/SignUp/SelectCampus/SelectCampusPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import { ObjectStorage } from "../contexts/ObjectContext";

function UserRoutes() {
  return (
    <>
      <UserStorage>
        <ObjectStorage>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/object-details/:id"
                element={<ObjectDetailsPage />}
              />
              <Route path="/select-campus" element={<SelectCampusPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ObjectStorage>
      </UserStorage>
    </>
  );
}

export default UserRoutes;
