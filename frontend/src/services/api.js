import axios from "axios";

//Creating an Axios instance with base URL and credentials
const api = axios.create({
  baseURL: "http://localhost:5000", //Backend server URL
  withCredentials: true,            //Includes cookies if needed
});

//Function to send a chat message to the backend
export const sendMessage = async (userId, message) => {
  const response = await api.post("/chat", { userId, message });
  return response.data.reply;
};