import axios from "axios";

export const Api = axios.create({
    baseURL: "https://swapi.dev/api/",
    //timeout: 5000,
  });
  