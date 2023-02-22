import { useContext } from "react";

//import { Card, Name, Attribute } from "./style.js";


import { getCharacterId } from "../../utils/GetCharacteredId.jsx";
import { Image } from "./style.js";
import { useEffect } from "react";
import { CharacterContext } from "../../context/CharacterContext.jsx";

const CharacterCard = () => {
  const { character, getCharacters, currentPage, totalPages } =
    useContext(CharacterContext);

  useEffect(() => {
    getCharacters(1);
  }, [getCharacters]);

  function handlePreviousPage(event) {
    event.preventDefault();
    if (currentPage > 1) {
      getCharacters(currentPage - 1);
    }
  }

  function handleNextPage(event) {
    event.preventDefault();
    if (currentPage < totalPages) {
      getCharacters(currentPage + 1);
    }
  }

  return (
    <div>
      {character &&
        character.map((character) => (
          <div key={character.name}>
            <h2>{character.name}</h2>
            <Image
              src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
                character.url
              )}.jpg`}
            />
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair color: {character.hair_color}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>Eye color: {character.eye_color}</p>
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ))}
      {currentPage > 1 && (
        <button onClick={handlePreviousPage}>Previous Page</button>
      )}
      {currentPage < totalPages && (
        <button onClick={handleNextPage}>Next Page</button>
      )}
    </div>
  );
};

export default CharacterCard;
