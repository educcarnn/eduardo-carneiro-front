import React, { createContext, useState } from 'react';
import { fetchCharacters } from '../services/api';

import { fetchCharacter } from '../services/api';
export const CharacterContext = createContext();

export function CharacterProvider(props) {
  const [character, setCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  
  async function getCharacter(id) {
    const data = await fetchCharacter(id);
    setCharacter(data);
  }

  async function getCharacters(page) {
    const data = await fetchCharacters(page);
    setCharacter(null);
    setCurrentPage(page);
    setTotalPages(Math.ceil(data.count / 10));
    setCharacter(data.results);
  }

  return (
    <CharacterContext.Provider value={{ character, getCharacter, getCharacters, currentPage, totalPages }}>
      {props.children}
    </CharacterContext.Provider>
  );
}