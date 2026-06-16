import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

// PRODUCTS
export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};