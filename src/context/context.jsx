/*
import { createContext, useState } from "react";

const CharacterContext = createContext();

function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`${API_URL}/people/`);
      setCharacters(response.data.results);
      setFilteredCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFilter = (type, value) => {
    setFilterType(type);
    setFilterValue(value);

    let filtered = characters;

    if (type === "species") {
      filtered = filtered.filter((character) =>
        character.species.includes(value)
      );
    } else if (type === "gender") {
      filtered = filtered.filter(
        (character) => character.gender.toLowerCase() === value.toLowerCase()
      );
    } else if (type === "movie") {
      filtered = filtered.filter((character) =>
        character.films.includes(value)
      );
    }

    setFilteredCharacters(filtered);
  };

  const resetFilters = () => {
    setFilteredCharacters(characters);
    setFilterType("");
    setFilterValue("");
  };

  const selectCharacter = (id) => {
    const character = characters.find((char) => char.id === id);
    setSelectedCharacter(character);
  };

  const deselectCharacter = () => {
    setSelectedCharacter(null);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        filteredCharacters,
        selectedCharacter,
        filterType,
        filterValue,
        fetchCharacters,
        applyFilter,
        resetFilters,
        selectCharacter,
        deselectCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export { CharacterProvider, CharacterContext };
*/
