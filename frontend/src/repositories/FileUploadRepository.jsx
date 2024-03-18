import axios from "axios";
import { API_URL } from "./../helper/Constant";

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: `${getToken()}`,
  },
});

export default instance;
