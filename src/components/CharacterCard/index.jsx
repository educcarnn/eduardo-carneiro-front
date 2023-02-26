import { Card, Name, Attribute } from "./style.js";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { CharacterContext } from "../../context/CharacterContext.jsx";
import { getCharacterId } from "../../utils/GetCharacteredId.jsx";
import Pagination from "../Pagination/index.jsx";
import { Image } from "./style.js";
import { CharacterModal } from "../Modal/index.jsx";

const CharacterCard = () => {
  const history = useHistory()

  const { characters } = useContext(CharacterContext);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { handleCardClick, handlePageClick } = useContext(CharacterContext);
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
        {characters.map((characters) => (
          <Card key={characters.name} >
            <Name>{characters.name}</Name>
            <Image
              src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
                characters.url
              )}.jpg`}
            />
            <Attribute>Altura {characters.height}</Attribute>
            <Attribute>Massa {characters.mass}</Attribute>
            <Attribute>Cor do cabelo {characters.hair_color}</Attribute>
            <Attribute>Cor da pele {characters.skin_color}</Attribute>
            <button  onClick={() => handleCardClick(characters)}>
              Mais informações
            </button>
            <button onClick={() => history.push(`/characters/${getCharacterId(characters.url)}`)}>Clique aqui</button>
          </Card>
        ))}
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
