
import { useContext } from "react";
import { StarWarsContext } from "../../context/StarWarsContext.jsx";
import { Card, Name, Attribute } from "./style.js";

const CharacterCard = () => {
  const { characters } = useContext(StarWarsContext);

  return (
    <Card>
      {characters.map((character) => (
        <li key={character.name}>
          <Name>{character.name}</Name>
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
