import Repository from "./Repository";
const resource = "/secured/trip";

const TripService = {
  createCheckoutSession(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/create-checkout-session`, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getSuccess(token) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/response/return?sessionId=${token}`)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  get() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/`)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  find(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/${id}`)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  create(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/`, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  update(id, payload) {
    return new Promise((resolve, reject) => {
      Repository.put(`${resource}/${id}`, payload)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

  delete(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/${id}`)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};

export default TripService;
