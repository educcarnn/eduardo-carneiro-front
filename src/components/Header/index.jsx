import InputContainer, { HeaderContainer, HeaderTitle } from "./style";
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { getCharacters } from "../../services/api";

export default function Header() {
  const { characters, setCharacters, searchName, setSearchName } =
    useContext(CharacterContext);

  const handleInputChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleResetClick = () => {
    setSearchName("");
    setCharacters([]);
  };

  const searchCharacters = async (name) => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = await response.json();
    if (data.count > 0) {
      return data.results[0];
    } else {
      return null;
    }
  }
  return (
    <HeaderContainer>
      <HeaderTitle>Star Wars</HeaderTitle>
      <InputContainer>
        <input type="text" onChange={handleInputChange} value={searchName} />
        <button onClick={searchCharacters}>Buscar</button>
        <button onClick={handleResetClick}>Limpar</button>
      </InputContainer>
    </HeaderContainer>
  );
}
