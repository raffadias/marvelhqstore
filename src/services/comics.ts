import api from "./api";

export function getComicBooks(limit: number, offset: number) {
  return api.get(`/comics?limit=${limit}&offset=${offset}orderBy=focDate`);
}

export function getComicBookById(comicId: number) {
  return api.get(`/comics/${comicId}`);
}
