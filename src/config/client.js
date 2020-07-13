import axios from "axios";
import config from "./repository";

const client = axios.create({
  baseURL: `http://${config.API_HOST}:${config.API_PORT}`,
  headers: {
    Authorization: `Bearer`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default client;
