import axios from "axios";
import { ACCESS_TOKEN, API_BASE_URL } from "@/constant/index";

const API = axios.create();

let userToken = "";

export const setAxiosConfig = (token: string) => {
  userToken = token;
};

API.interceptors.request.use((axiosConfig) => {
  // Only set TMDB base URL and token for TMDB API calls
  if (!axiosConfig.url?.startsWith("http")) {
    axiosConfig.baseURL = API_BASE_URL;
    axiosConfig.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  } else if (userToken) {
    // For external APIs (like dummyjson), use user token if available
    axiosConfig.headers.Authorization = `Bearer ${userToken}`;
  }

  return axiosConfig;
});

export default API
// import axios from "axios";
// import { ACCESS_TOKEN, API_BASE_URL } from "@/constant/index";

// const API = axios.create();

// export const setAxiosConfig = (token: string) => {
//   // bearerToken = token;
// };

// API.interceptors.request.use((axiosConfig) => {
//   axiosConfig.baseURL = API_BASE_URL;
//   axiosConfig.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;

//   return axiosConfig;
// });

// export default API