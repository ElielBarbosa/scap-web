import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.route";
import UserRoutes from "./user.route";

//aqui a gente controla se o usuario esta logado ou não e, de acordo com o tipo de usuario, quais rotas ele pode acessar.
function MyRoutes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default MyRoutes;
