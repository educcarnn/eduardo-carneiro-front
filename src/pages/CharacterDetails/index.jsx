import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext";

export default function CharacterDetails() {
  const { selectedCharacter, selectCharacter, characters } = useContext(CharacterContext);
  const { id } = useParams();

  useEffect(() => {
    selectCharacter(id);
  }, [id, selectCharacter]);

  useEffect(() => {
    console.log(selectedCharacter);
  }, [selectedCharacter]);

 


  return (
    <div>
      {!selectedCharacter ? (
        <div>
          <div>Carregando</div>
        </div>
      ) : (
        <div>
          <div>{selectedCharacter.name}</div>
          <div>{selectedCharacter.height}</div>
          <div>{selectedCharacter.mass}</div>
          <div>{selectedCharacter.hair_color}</div>
          <div>{selectedCharacter.skin_color}</div>
          <button>Voltar</button>
        </div>
      )}
    </div>
  );
  
}