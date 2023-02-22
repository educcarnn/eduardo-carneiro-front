import { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const CharacterList = () => {
  const {characters} = useContext(StarWarsContext)

  return (
    <ul>
      {characters.map(character => (
        <li key={character.name}>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
