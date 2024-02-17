import axios from "axios";

const resource = "http://localhost:8080/api/public/auth";

const AuthService = {
  login(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/login`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  logout() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/api-logout`, {})
        .then((response) => {
          resolve(response.data.body);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  register(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/register`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  verifyAccount(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/api/verify`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  forgetPassword(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/api/forget-password`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  resetPassword(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/api/reset-password`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};

export default AuthService;
