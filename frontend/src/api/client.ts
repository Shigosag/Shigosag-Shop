import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});

// PRODUCTS
export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};
