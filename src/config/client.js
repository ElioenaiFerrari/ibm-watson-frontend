import axios from "axios";
// import config from "./repository";

const client = axios.create({
  baseURL: "http://localhost:4001",
});

client.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default client;
