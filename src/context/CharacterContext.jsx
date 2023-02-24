import { createContext, useState, useEffect } from "react";
import { getCharacters } from "../../src/services/api.js";

export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);
  const [ModalIsOpen, setModalIsOpen] = useState(true)

  //Paginação
  const loadCharacters = async () => {
    const data = await getCharacters(page);
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

  //Modal
  const selectCharacter = (id) => {
    const character = characters.find((char) => char.id === id);
    setSelectedCharacter(character);
  };

  const deselectCharacter = () => {
    setSelectedCharacter(null);
  };

  const handleCardClick = (characters) => {
    setSelectedCharacter(characters);
    setModalIsOpen(true);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        nextPage,
        previousPage,
        selectCharacter,
        deselectCharacter,
        handleCardClick,
        setSelectedCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
