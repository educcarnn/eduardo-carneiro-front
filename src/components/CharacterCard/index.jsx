import { Card, Name, Attribute } from "./style.js";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { CharacterContext } from "../../context/CharacterContext.jsx";
import { getCharacterId } from "../../utils/GetCharacteredId.jsx";
import Pagination from "../Pagination/index.jsx";
import { Image } from "./style.js";
import { CharacterModal } from "../Modal/index.jsx";

const CharacterCard = () => {
  const history = useHistory();

  const { characters } = useContext(CharacterContext);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { handleCardClick, searchedCharacters } = useContext(CharacterContext);
  const { modalIsOpen } = useContext(CharacterContext);


  //Filtro
  /*


  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  let filteredCharacters = characters;

  if (selectedFilter === "gender") {
    filteredCharacters = characters.filter(
      (character) => character.gender === "male"
    );
  } else if (selectedFilter === "species") {
    filteredCharacters = characters.filter(
      (character) => character.species === "Human"
    );
  } else if (selectedFilter === "films") {
    filteredCharacters = characters.filter(
      (character) => character.films.length > 1
    );
  }
*/

  return (
    <div>
      <ul>
        {searchedCharacters.length !== 0 ? (
          searchedCharacters.map((character) => (
            <Card key={character.name}>
              <Name>{character.name}</Name>
              <Image
                src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
                  character.url
                )}.jpg`}
              />
              <Attribute>Altura {character.height}</Attribute>
              <Attribute>Massa {character.mass}</Attribute>
              <Attribute>Cor do cabelo {character.hair_color}</Attribute>
              <Attribute>Cor da pele {character.skin_color}</Attribute>
              <button onClick={() => handleCardClick(character)}>
                Mais informações
              </button>
              <button
                onClick={() =>
                  history.push(`/characters/${getCharacterId(character.url)}`)
                }
              >
                Clique aqui
              </button>
            </Card>
          ))
        ) : characters.length > 0 ? (
          characters.map((character) => (
            <Card key={character.name}>
              <Name>{character.name}</Name>
              <Image
                src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
                  character.url
                )}.jpg`}
              />
              <Attribute>Altura {character.height}</Attribute>
              <Attribute>Massa {character.mass}</Attribute>
              <Attribute>Cor do cabelo {character.hair_color}</Attribute>
              <Attribute>Cor da pele {character.skin_color}</Attribute>
              <button onClick={() => handleCardClick(character)}>
                Mais informações
              </button>
              <button
                onClick={() =>
                  history.push(`/characters/${getCharacterId(character.url)}`)
                }
              >
                Clique aqui
              </button>
            </Card>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
      {modalIsOpen ? (
        <div>
          <CharacterModal />
        </div>
      ) : (
        <></>
      )}
      <Pagination />
    </div>
  );
};

export default CharacterCard;
