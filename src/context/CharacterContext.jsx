import { createContext, useState, useEffect } from "react";
import { getCharacters } from "../../src/services/api.js";
import { useHistory } from "react-router-dom";
import { getCharacterById } from "../../src/services/api.js";

export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const history = useHistory();
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchName, setSearchName] = useState("");


  const loadCharacters = async () => {
    const data = await getCharacters(page || 1);
    setCharacters(data.results);
  };

  useEffect(() => {
    loadCharacters();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const selectCharacter = async (id) => {
    const character = await getCharacterById(id);
    setSelectedCharacter(character);

  };

  const deselectCharacter = () => {
    setSelectedCharacter(null);
    history.push("/");
  };

  const handleCardClick = (characters) => {
    setSelectedCharacter(characters);
    setModalIsOpen(true);
  };

  return (
    <CharacterContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        characters,
        nextPage,
        previousPage,
        selectCharacter,
        deselectCharacter,
        handleCardClick,
        setSelectedCharacter,
        searchName,
        setCharacters,
        setSearchName,
        selectedCharacter,
  
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
