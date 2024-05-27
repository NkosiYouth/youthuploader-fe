import axios from "../utils/axios";

export default class UserService {
  static getAll(params = {}) {
    return axios.get("users", {
      params: params,
    });
  }
  static getById(id) {
    return axios.get(`users/${id}`);
  }

  static updateById(id, data) {
    return axios.put(`users/${id}`, data);
  }

  static verifyById(id, data) {
    return axios.put(`verify/${id}`, data);
  }
}
