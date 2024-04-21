import request from "@/utils/request.js";

// 题目列表查询
export const problemListService = (currentPage, pageSize) => {
  const conditionData = {
    pageNum: currentPage,
    pageSize: pageSize,
  };
  return request.get("/problem/list", { params: conditionData });
};
