import request from "@/utils/request.js";

// 题目合集列表查询
export const collectionListService = (
  currentPage,
  pageSize,
  collectionName
) => {
  const params = new URLSearchParams();
  params.append("pageNum", currentPage);
  params.append("pageSize", pageSize);
  params.append("collectionName", collectionName);
  return request.get("/collection/list", { params: params });
};
