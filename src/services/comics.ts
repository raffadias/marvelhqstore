import api from "./api";

export function getComicBooks() {
  return api.get("/comics");
}
