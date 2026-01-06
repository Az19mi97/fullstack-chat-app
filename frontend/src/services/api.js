import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const sendMessage = async (userId, message) => {
  const response = await api.post("/chat", { userId, message });
  return response.data.reply;
};