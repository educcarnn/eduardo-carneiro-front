import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext.jsx";
import { CloseButton, Overlay, ModalContainer } from "./style";

export const CharacterModal = () => {
  const { setModalIsOpen, selectedCharacter } =
    useContext(CharacterContext);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Overlay>
      <ModalContainer>
        <h2>{selectedCharacter.name}</h2>
        <p>Cor do olho {selectedCharacter.eye_color}</p>
        <p>Peso {selectedCharacter.mass}</p>
        <CloseButton onClick={closeModal}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};
