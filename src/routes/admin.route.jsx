import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";

import RegisterObjectPage from "../pages/RegisterObject/RegisterObjectPage";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/register-object" element={<RegisterObjectPage />} />
        </Route>

        <Route path="*" />
      </Routes>
    </>
  );
}

export default AdminRoutes;
