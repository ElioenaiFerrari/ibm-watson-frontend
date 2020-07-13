import axios from "axios";
// import serverConfig from "./repository";

// const { API_HOST, API_PORT } = serverConfig;

const client = axios.create({
  // baseURL: `http://${API_HOST}:${API_PORT}`,
  baseURL: "http://localhost:4002",
});

client.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default client;
