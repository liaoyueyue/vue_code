import axios from "axios";

const baseURL = "/api";
const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.response.use(
  (result) => {
    return result.data;
  },
  (err) => {
    return Promise.reject(err); // 异步状态转化为失败的状态
  }
);

export default axiosInstance;
