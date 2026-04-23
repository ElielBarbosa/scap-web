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
  const [error, setError] = useState(null);

  useEffect(() => {});

  async function handdleLogin(bodyRequest) {
    try {
      const response = await api.post("/auth/login", bodyRequest);
      console.log(response);

      if (response.data.token) {
        setError();
        const token = response.data.token.split(" ");
        window.localStorage.setItem(token[0], token[1]);
      }

      //isso ta fraco, melhorar depois
      if (response.status == 200 && response.data.token) {
        return navigate("/conta");
      }
    } catch (error) {
      //console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  }

  function mudarModal() {
    setMostrar(!mostrar);
  }

  async function createNewUser() {
    try {
      setError();
      const response = await api.post("/user", registerData, {
        headers: {
          "Content-Type": "application/json", // Garanta que isso seja enviado
        },
      });
      console.log(response);

      //setRegisterData({});
    } catch (error) {
      setError(error.response.message);
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
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
