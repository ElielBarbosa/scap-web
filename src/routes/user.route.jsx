import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import HomePage from "../pages/Home/HomePage";
import ObjectDetailsPage from "../pages/ObjectDetails/ObjectDetailsPage";

function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/object" element={<ObjectDetailsPage />} />
        </Route>

        <Route path="*" />
      </Routes>
    </>
  );
}

export default UserRoutes;
