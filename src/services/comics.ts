import api from "./api";

export function getComicBooks(offset: number) {
  return api.get(`/comics?offset=${offset}&orderBy=focDate`);
}
