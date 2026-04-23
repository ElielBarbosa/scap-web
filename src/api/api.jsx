import axios from "axios";

export const URL_BASE = "http://localhost:3000/api/v1";
export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});
