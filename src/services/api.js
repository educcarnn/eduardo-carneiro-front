const API_URL = "https://swapi.dev/api/";

export async function fetchCharacters(page) {
  const response = await fetch(`${API_URL}people/?page=${page}`);
  const data = await response.json();
  return data;
}

export async function fetchCharacter(id) {
  const response = await fetch(`${API_URL}people/${id}/`);
  const data = await response.json();
  return data;
}
