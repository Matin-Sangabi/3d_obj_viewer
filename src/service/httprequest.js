import axios from "axios";

const app = axios.create({
  baseURL: "https://gaply-autorender.runflare.run",
});

export const http = {
  get: app.get,
  post: app.post,
};
