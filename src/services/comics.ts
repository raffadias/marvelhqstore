import api from "./api";

export async function getComicBooks() {
  return await api.get("/comics");
}
