import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://taskmanager-backend-2jf7.onrender.com/api/v1/tasks",
    timeout: 60000, // 60 second because backend is hosted on free teir , it is taking so much time 
    headers: { "Content-Type": "application/json" },
  });
  
  export default axiosInstance;