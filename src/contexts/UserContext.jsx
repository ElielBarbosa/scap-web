import { createContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { api, getUserByToken, URL_BASE, verifyToken } from "../api/api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);
  const [registerData, setRegisterData] = useState(null);
  const [selectedCampus, setSelectCampus] = useState({});
  const [userData, setUserData] = useState({});
  const [userLoged, setUserLoged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      // console.log(token);
      if (token) {
        try {
          setErrorRegister(null);
          setErrorLogin(null);
          setLoading(true);
          //preciso de uma rota para verificar se o token é válido;
          const response = await verifyToken(token);
          //console.log(response.data.valido);
          //se o token n for ok, no caso a api retorna algo como {"ok": true ou false}
          //caso seja !false, ou seja dá true, lança um erro que pegaremos no catch()
          if (!response.data?.valido) {
            userLogout();
            throw new Error("Token inválido");
          }
          // uma rota que pega os dados de usuário a partir do token
          //no outro projeto ele coloca os dados de usuário num state mesmo, no caso aqui, no userData
          const data = await getUserByToken(token);

          setUserLoged(true);
          await setUserData(data.data.usuario);
          console.log(data.data.usuario);
          console.log(userData);
        } catch (error) {
          console.log(error);
          //Caso de erro fazemos o logout
          userLogout();
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      }
    }
    autoLogin();
  }, []);

  //função para fazer logout e limpar os dados do usuário
  function userLogout() {
    setLoading(true);
    setUserData(null);
    setErrorRegister(null);
    setErrorLogin(null);
    setUserLoged(false);
    window.localStorage.removeItem("token");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    window.location.href = "/";
  }

  async function handdleLogin(bodyRequest) {
    try {
      setLoading(true);
      const response = await api.post("/auth/signin", bodyRequest);

      if (response.data.token) {
        setErrorLogin(null);

        const userDataSigniIn = response.data.user;
        const token = response.data.token;
        window.localStorage.setItem("token", token);
        setUserData(userDataSigniIn);

        if (userDataSigniIn) {
          setUserLoged(true);
          window.location.href = "/";

          setLoading(false);
        }
        console.log("Aqui", response.status);
      }
    } catch (error) {
      //setLoading(false);
      if (error.message === "Network Error") {
        setErrorLogin(
          "Por favor, verifique sua conexão ou tente novamente mais tarde.",
        );
      }
      setErrorLogin(error.response.data.message);
    }
  }

  function mudarModal() {
    setMostrar(!mostrar);
  }

  async function createNewUser() {
    try {
      setLoading(true);

      setErrorRegister(null);
      const response = await api.post("/auth/signup", registerData, {
        headers: {
          "Content-Type": "application/json", // Garanta que isso seja enviado
        },
      });

      const token = response.data.token;
      const userDataRegister = response.data.user;

      setUserData(userDataRegister);
      window.localStorage.setItem("token", token);

      if (userDataRegister) {
        //setUserLoged(true);
        navigate("/");
      }

      //setRegisterData({});
    } catch (error) {
      if (error.message === "Network Error") {
        setErrorRegister(
          "Por favor, verifique sua conexão ou tente novamente mais tarde.",
        );
      }
      setErrorRegister(error.response.data.message);
    }
  }

  async function verifyUser(bodyRequest) {
    try {
      const response = await api.post("/user/verify", bodyRequest, {
        headers: {
          "Content-Type": "application/json", // Garanta que isso seja enviado
        },
      });
      if (response.data.exist == true) {
        setErrorRegister("E-mail ou matricula já existe!");
        return response.data;
      }
      setErrorRegister(null);
      return response.data;
    } catch (error) {
      if (error.message) {
        setErrorRegister(
          "Por favor, verifique sua conexão ou tente novamente mais tarde.",
        );
      }
      console.error(error.response.data.exist);
    }
  }

  return (
    <UserContext.Provider
      value={{
        handdleLogin,
        mostrar,
        setMostrar,
        mudarModal,
        registerData,
        setRegisterData,
        selectedCampus,
        setSelectCampus,
        createNewUser,
        errorRegister,
        setErrorRegister,
        errorLogin,
        setErrorLogin,
        verifyUser,
        isLoading,
        setLoading,
        userLoged,
        userData,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
