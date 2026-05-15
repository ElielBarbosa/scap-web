import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import RegisterObjectPage from "../pages/RegisterObject/RegisterObjectPage";
import ObjectDetailsPage from "../pages/ObjectDetails/ObjectDetailsPage";
import ObjectControlPage from "../pages/ObjectControl/ObjectControlPage";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/register-object" element={<RegisterObjectPage />} />
          <Route path="/objects" element={<ObjectControlPage />} />
        </Route>

        <Route path="*" />
      </Routes>
    </>
  );
}

export default AdminRoutes;
