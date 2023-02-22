
import { useContext } from "react";
import { StarWarsContext } from "../../context/StarWarsContext.jsx";
import { Card, Name, Attribute } from "./style.js";
import { getCharacterId } from "../../utils/GetCharacteredId.jsx";
const CharacterCard = () => {
  const { characters } = useContext(StarWarsContext);



  return (
    <Card>
      {characters.map((character) => (
        <li key={character.name}>
          <Name>{character.name}</Name>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg`} alt={character.name}/>
          <Attribute>Altura: {character.height}</Attribute>
          <Attribute>Massa: {character.mass}</Attribute>
          <Attribute>Cor do cabelo: {character.hair_color}</Attribute>
          <Attribute>Cor da pele: {character.skin_color}</Attribute>
          <Attribute>Cor do olho: {character.eye_color}</Attribute>
          <Attribute>Ano de nascimento: {character.birth_year}</Attribute>
          <Attribute>Genero: {character.gender}</Attribute>
        </li>
      ))}
    </Card>
  );

  
};

export default CharacterCard;
