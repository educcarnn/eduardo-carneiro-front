import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext";

import { useHistory } from "react-router-dom";

export default function CharacterDetails() {
  const { selectedCharacter, selectCharacter, characters } =
    useContext(CharacterContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id && characters.length > 0) {
      const character = characters.find((char) => char.id === parseInt(id));
      selectCharacter(character);
    }
  }, [id, characters, selectCharacter]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      {!selectedCharacter ? (
        <div>
          <div>Carregando...</div>
        </div>
      ) : (
        <div>
          <div>{selectedCharacter.name}</div>
          <div>{selectedCharacter.height}</div>
          <div>{selectedCharacter.mass}</div>
          <div>{selectedCharacter.hair_color}</div>
          <div>{selectedCharacter.skin_color}</div>
          <button onClick={handleGoBack}>Voltar</button>
        </div>
      )}
    </div>
  );
}
