import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {});

  async function handdleLogin(bodyRequest) {
    try {
      const response = await api.post("/auth/login", bodyRequest);
      const token = response.data.token.split(" ");

      console.log(response);
      window.localStorage.setItem(token[0], token[1]);

      //isso ta fraco, melhorar depois
      if (response.status == 200 && response.data.token) {
        return navigate("/conta");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function mudarModal() {
    setMostrar(!mostrar);
  }

  async function createNewUser() {
    try {
      const response = await api.post("/user", registerData, {
        headers: {
          "Content-Type": "application/json", // Garanta que isso seja enviado
        },
      });
      console.log(response);

      //setRegisterData({});
    } catch (error) {
      console.log(error.response);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
