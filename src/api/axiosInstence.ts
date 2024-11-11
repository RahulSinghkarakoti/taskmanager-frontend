import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://taskmanager-backend-2jf7.onrender.com/api/v1/tasks",
    timeout: 30000,
    headers: { "Content-Type": "application/json" },
  });
  
  export default axiosInstance;