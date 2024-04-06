import request from "@/utils/request";

export function getAllProblems() {
  return request.get("/problem/all");
}

export function searchProblems(conditions) {
  return request.get("/problem/search", {
    params: conditions,
  });
}
