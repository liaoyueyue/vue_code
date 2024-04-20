import request from "@/utils/request.js";

// 题目合集列表查询
export const collectionListService = (
  currentPage,
  pageSize,
  collectionName
) => {
  const conditionData = {
    pageNum: currentPage,
    pageSize: pageSize,
    collectionName: collectionName,
  };
  return request.get("/collection/list", { params: conditionData });
};

// 题目合集添加
export const addCollectionService = (collectionData) => {
  const params = new URLSearchParams();
  for (let key in collectionData) {
    params.append(key, collectionData[key]);
  }
  return request.post("/collection/add", params);
};
