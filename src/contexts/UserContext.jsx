import { createContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { api, URL_BASE } from "../api/api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);

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

  return (
    <UserContext.Provider
      value={{ handdleLogin, mostrar, setMostrar, mudarModal }}
    >
      {children}
    </UserContext.Provider>
  );
};
