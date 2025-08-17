import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// Create a singleton Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env["API_BASE_URL"] || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
//   timeout: 10000, // optional timeout
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Centralized error handling
    if (error.response) {
      console.error("API Error:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network Error: No response received", error.message);
    } else {
      // Something happened in setting up the request
      console.error("Request Setup Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;