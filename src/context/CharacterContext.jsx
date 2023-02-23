import { createContext, useState, useEffect } from 'react';
import { getCharacters } from '../../src/services/api.js';

export const CharacterContext = createContext();

export function CharacterProvider({children}) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  
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


  
  return (
    <CharacterContext.Provider value={{ characters, nextPage, previousPage }}>
      {children}
    </CharacterContext.Provider>
  );
}