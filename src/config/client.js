import axios from "axios";
import config from "./repository";

const { API_HOST, API_PORT } = config;

const client = axios.create({
  baseURL: `http://${API_HOST}: ${API_PORT}`,
});

client.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default client;
