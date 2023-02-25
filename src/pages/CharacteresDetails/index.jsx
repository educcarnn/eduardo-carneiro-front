import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext";

export default function CharacterDetails() {
  const { selectedCharacter, selectCharacter } = useContext(CharacterContext);
  const { id } = useParams()

  useEffect(() => {
    selectCharacter(id); // Seleciona o personagem a partir do id passado
  }, [id, selectCharacter]);

  if (!selectedCharacter) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div>
        <h2>{selectedCharacter.name}</h2>
      </div>
    </div>
  );
}