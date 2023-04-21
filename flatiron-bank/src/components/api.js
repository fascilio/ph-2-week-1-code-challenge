import axios from "axios";

const API_BASE_URL = "http://localhost:8001";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTransactions = async () => {
  const response = await api.get("/transactions");
  return response.data;
};

export const addTransaction = async (transaction) => {
  const response = await api.post("/transactions", transaction);
  return response.data;
};
