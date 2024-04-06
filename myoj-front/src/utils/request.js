import axios from "axios";

const baseURL = "http://localhost:8080";
const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.response.use(
  (result) => {
    return result.data.data;
  },
  (err) => {
    return Promise.reject(err); // 异步状态转化为失败的状态
  }
);

export default axiosInstance;
