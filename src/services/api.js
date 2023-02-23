import axios from "axios";

const API_URL = "https://swapi.dev/api/";

export const getCharacters = async (page) => {
  const response = await axios.get(`${API_URL}/people/?page=${page}`);
  return response.data;
};