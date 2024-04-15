import request from "@/utils/request.js";

// 题目列表查询
export const problemListService = (currentPage, pageSize) => {
  const params = new URLSearchParams();
  params.append("pageNum", currentPage);
  params.append("pageSize", pageSize);
  return request.get("/problem/list", { params: params });
};
