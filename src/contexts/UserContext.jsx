import { createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { api, URL_BASE } from "../api/api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const [selectedCampus, setSelectCampus] = useState();
  const [errorRegister, setErrorRegister] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  async function handdleLogin(bodyRequest) {
    try {
      const response = await api.post("/auth/login", bodyRequest);
      console.log(response);

      if (response.data.token) {
        setErrorLogin(null);
        const token = response.data.token.split(" ");
        window.localStorage.setItem(token[0], token[1]);
      }

      //isso ta fraco, melhorar depois
      if (response.status == 200 && response.data.token) {
        return navigate("/conta");
      }
    } catch (error) {
      setErrorLogin(error.response.data.message);
    }
  }

  function mudarModal() {
    setMostrar(!mostrar);
  }

  async function createNewUser() {
    try {
      setErrorRegister(null);
      const response = await api.post("/user", registerData, {
        headers: {
          "Content-Type": "application/json", // Garanta que isso seja enviado
        },
      });
      console.log(response.error);
      console.log(response.data);

      //setRegisterData({});
    } catch (error) {
      console.log(error.response);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
