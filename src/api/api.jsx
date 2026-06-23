import axios from "axios";

export const URL_BASE = "http://localhost:3000/api/v1";
export const api = axios.create({
  baseURL: URL_BASE,
});

export async function verifyToken(token) {
  return await api.post(
    "/auth/verify-token",
    {},
    {
      // Configurações da requisição (headers vão aqui)
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function getUserByToken(token) {
  return await api.post(
    "/user/getUserByToken",
    {},
    {
      // Configurações da requisição (headers vão aqui)
      headers: {
        Authorization: token,
      },
    },
  );
}

export async function registerObject(formData) {
  try {
    return await api.post("/object", formData);
  } catch (error) {
    console.log(error.response.data);
  }
}
export async function getCategories() {
  try {
    const response = await api.get("/category");
    console.log("Resposta da API:", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
