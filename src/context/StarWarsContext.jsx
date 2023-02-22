import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <StarWarsContext.Provider value={{ characters }}>
      {children}
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext, StarWarsProvider };

