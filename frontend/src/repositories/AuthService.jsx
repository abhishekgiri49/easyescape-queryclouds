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

  forgotPassword(payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}/forgot-password`, payload)
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
        .post(`${resource}/reset-password`, payload)
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
