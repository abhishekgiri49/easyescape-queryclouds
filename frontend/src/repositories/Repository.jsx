import axios from "axios";
import { API_URL } from "./../helper/Constant";
const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};
let instance;
if (getToken()) {
  instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
      Authorization: `${getToken()}`,
    },
  });
} else {
  instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
    },
  });
}

export default instance;
