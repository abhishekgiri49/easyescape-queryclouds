import axios from "axios";

const baseEndpoint = `http://localhost:8080/api`; // ${baseDomain}
const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};
let instance;
if (getToken()) {
  instance = axios.create({
    baseURL: baseEndpoint,
    headers: {
      "Content-type": "application/json",
      Authorization: `${getToken()}`,
    },
  });
} else {
  instance = axios.create({
    baseURL: baseEndpoint,
    headers: {
      "Content-type": "application/json",
    },
  });
}

export default instance;
