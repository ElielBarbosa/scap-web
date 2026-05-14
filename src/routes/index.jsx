import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.route";
import UserRoutes from "./user.route";
import AdminRoutes from "./admin.route";

//aqui a gente controla se o usuario esta logado ou não e, de acordo com o tipo de usuario, quais rotas ele pode acessar.
function MyRoutes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <UserRoutes />
      <AdminRoutes />
    </BrowserRouter>
  );
}

export default MyRoutes;
