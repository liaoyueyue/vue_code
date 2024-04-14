import axios from "axios";

const baseURL = "/api";
const axiosInstance = axios.create({ baseURL });

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (result) => {
    if (result.data.code === 0 || result.data.code === -1) {
      return result.data;
    }
    // 操作失败
    ElMessage.error(result.data.msg ? result.data.msg : "Service exception");
    return Promise.reject(err);
  },
  (err) => {
    ElMessage.error("Service exception");
    return Promise.reject(err); // 异步状态转化为失败的状态
  }
);

export default axiosInstance;
