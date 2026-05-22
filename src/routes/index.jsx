import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./auth.route";
import UserRoutes from "./user.route";
import AdminRoutes from "./admin.route";
import Loading from "../components/Loading";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { UserStorage } from "../contexts/UserContext";

//aqui a gente controla se o usuario esta logado ou não e, de acordo com o tipo de usuario, quais rotas ele pode acessar.

// const session = {
//   user: {
//     role: "admin",
//   },
// };

// 1. Este componente cuida especificamente de decidir QUAL rota renderizar
function RouterContent() {
  const { isLoading } = useContext(UserContext);

  // Se estiver carregando os dados do usuário, trava a renderização aqui e mostra o Loading
  if (isLoading) {
    return <Loading />;
  }
}

function RouterFunc() {
  const { userData } = useContext(UserContext);
  // Quando terminar de carregar, decide a rota por perfil
  // switch (session?.user?.role) {
  //   case "user":
  //     return <UserRoutes />;
  //   case "visitor":
  //     return <UserRoutes />;
  //   case "admin":
  //     return <AdminRoutes />;
  //   default:
  //     return <AuthRoutes />;
  // }

  console.log(userData?.userType);
  useEffect(() => {}, [userData]);
  switch (userData?.userType) {
    case 1:
      return <UserRoutes />;
    case 2:
      return <AdminRoutes />;
    default:
      return <AuthRoutes />;
  }
}

function MyRoutes() {
  return (
    <BrowserRouter>
      <UserStorage>
        <RouterContent />
        <RouterFunc />
      </UserStorage>
    </BrowserRouter>
  );
}

export default MyRoutes;
