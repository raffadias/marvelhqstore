import api from "./api";

export function getComicBooks(limit: number) {
  return api.get(`/comics?limit=${limit}&orderBy=focDate`);
}
