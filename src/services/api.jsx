import axios from "axios";

export const Api = axios.create({
    baseURL: "https://swapi.dev/api/",
    //timeout: 5000,
  });
  
export const ApiPages = axios.create({
  baseURL: "https://swapi.dev/api/people/?page="
})