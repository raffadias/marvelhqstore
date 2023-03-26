import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/";
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: baseURL,
  params: {
    ts,
    apikey: publicKey,
    hash
  }
});

export default api;
