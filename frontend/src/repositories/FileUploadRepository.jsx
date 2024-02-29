import axios from "axios";


const baseEndpoint = `http://localhost:8080/api`; // ${baseDomain}
const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
const instance = axios.create({
    baseURL: baseEndpoint,
    headers: {
        "Content-type" : "multipart/form-data",
        Authorization: `Bearer ${getToken()}`
    }
});



export default instance;

