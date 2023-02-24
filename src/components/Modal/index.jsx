import ReactModal from 'react-modal';

export  const CharacterModal = ({ character, isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Informações adicionais"
    >
      <h2>{character.name}</h2>
      <p>Gênero: {character.gender}</p>
      <p>Espécie: {character.species}</p>
      <p>Aparições em filmes: {character.films.length}</p>
      <button onClick={onRequestClose}>Fechar</button>
    </ReactModal>
  );
};