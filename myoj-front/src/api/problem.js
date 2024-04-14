import request from "@/utils/request.js";
import { useTokenStore } from "@/stores/token";

// 题目列表查询
export const problemListService = (currentPage, pageSize) => {
  const params = new URLSearchParams();
  params.append(currentPage, currentPage);
  params.append(pageSize, pageSize);
  const tokenStore = useTokenStore();
  return request.get("/problem/list", {
    headers: { Authorization: tokenStore.token },
  });
};
