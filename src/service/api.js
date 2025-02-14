import axios from "axios";
// FULL URL
//  https://api.themoviedb.org/3/movie/5507?api_key=2e963f4c3e1b02490fac8abe4f9fddcb

// API KEY api_key=2e963f4c3e1b02490fac8abe4f9fddcb

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
