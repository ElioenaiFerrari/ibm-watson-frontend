import axios from "axios";
// import config from "./repository";

const client = axios.create({
  baseURL: "http://192.168.0.9:4001",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default client;
