import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "2e963f4c3e1b02490fac8abe4f9fddcb",
  },
});

export default api;
