import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.route";
import UserRoutes from "./user.route";
import AdminRoutes from "./admin.route";
import Loading from "../components/Loading";
import { UserContext, UserStorage } from "../contexts/UserContext";
import { useContext } from "react";

// Juntamos a lógica em um único componente de controle
function AppNavigation() {
  const { userData, isLoading } = useContext(UserContext);

  // 1. Enquanto estiver verificando o token/login no localStorage, MOSTRA O LOADING
  // Isso impede que qualquer rota seja renderizada antes da hora
  if (isLoading) {
    return <Loading />;
  }

  // 2. Agora que já terminou de carregar, decide com base no dado real e atualizado
  console.log("Nível do usuário atual:", userData?.userType);

  switch (userData?.userType) {
    case 1:
      return <UserRoutes />;
    case 2:
      return <AdminRoutes />;
    default:
      // Se não for 1 nem 2 (ou for null/undefined), manda para o Login!
      return <UserRoutes />;
  }
}

function MyRoutes() {
  return (
    <BrowserRouter>
      <UserStorage>
        {/* O AppNavigation cuida de tudo de forma síncrona */}
        <AppNavigation />
      </UserStorage>
    </BrowserRouter>
  );
}

export default MyRoutes;
