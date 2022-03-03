import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.18.37:3334",
});

export default api;
