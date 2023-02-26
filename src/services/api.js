import axios from "axios";

export const API_URL = "https://swapi.dev/api/";

export const getCharacters = async (page) => {
  const url = `${API_URL}people/?page=${page}`
  const response = await axios.get(url);
  const data = response.data;
  return data;
}

export const getCharacterById = async (id) => {
  const response = await axios.get(`${API_URL}people/${id}/`);
  const data = response.data;
  return data;
}

/*
export const getGenres = async () => {
  const response = await axios.get(`${API_URL}/people/`);
  const characters = response.data.results;
  const genres = characters.reduce((acc, cur) => {
    if (!acc.includes(cur.gender)) {
      acc.push(cur.gender);
    }
    return acc;
  }, []);
  return genres;
};

export const getSpecies = async () => {
  const response = await axios.get(`${API_URL}/species/`);
  return response.data.results;
};

export const getFilms = async () => {
  const response = await axios.get(`${API_URL}/films/`);
  return response.data.results;
};
*/
