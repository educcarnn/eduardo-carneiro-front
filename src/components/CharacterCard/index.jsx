import { useContext } from "react";

//import { Card, Name, Attribute } from "./style.js";

import { getCharacterId } from "../../utils/GetCharacteredId.jsx";
import { Image } from "./style.js";

import { CharacterContext } from "../../context/CharacterContext.jsx";
import Pagination from "../Pagination/index.jsx";

const CharacterCard = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      {characters.map((character) => (
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
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default CharacterCard;
