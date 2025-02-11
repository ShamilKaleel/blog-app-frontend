import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Replace with your base URL
  withCredentials: true, // Include cookies in requests
});

export default axiosInstance;
