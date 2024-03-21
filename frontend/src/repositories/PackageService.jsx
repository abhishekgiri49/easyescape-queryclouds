import Repository from "./Repository";
import FileUploadRepository from "./FileUploadRepository";
const resource = "/secured/packages";

const PackageService = {
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
  getPackageWithFilters(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/search`, payload)
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
  findforPublic(id) {
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
  getBlogbyCategory(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/category/${id}`)
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
      FileUploadRepository.post(`${resource}`, payload)
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
  updatePackageIncluded(id, payload) {
    return new Promise((resolve, reject) => {
      Repository.put(`${resource}/update-included/${id}`, payload)
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

export default PackageService;
