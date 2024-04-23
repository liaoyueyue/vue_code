import request from "@/utils/request.js";

// 题目列表查询
export const problemListService = (currentPage, pageSize, searchForm) => {
  let conditionData = {
    pageNum: currentPage,
    pageSize: pageSize,
    collectionName: searchForm.collectionName,
    level: searchForm.level,
  };
  return request.get("/problem/list", { params: conditionData });
};
