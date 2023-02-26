import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCharacterById } from "../../services/api";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
const CharacterDetail = () => {
  const { id } = useParams();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacter = async () => {
      const character = await getCharacterById(id);
      setSelectedCharacter(character);
      setLoading(false);
    };
    loadCharacter();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      {selectedCharacter && (
        <>
        <Header/>
          <h2>{selectedCharacter.name}</h2>
          <p>Altura: {selectedCharacter.height}</p>
          <p>Peso: {selectedCharacter.mass}</p>
          <p>Cor do cabelo: {selectedCharacter.hair_color}</p>
          <p>Cor da pele: {selectedCharacter.skin_color}</p>
          <Link to="/">Voltar</Link>
        </>
      )}
    </>
  );
};

export default CharacterDetail;
