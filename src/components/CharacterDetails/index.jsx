import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { StarWarsContext } from "../../context/StarWarsContext";

const CharacterDetailsWrapper = styled.div`
  background-color: #ffd700;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  padding: 24px;
`;

const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const DetailLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CharacterDetails = ({ id, onClose }) => {
  const { getCharacterDetails } = useContext(StarWarsContext);
  const [characterDetails, setCharacterDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = await getCharacterDetails(id);
      setCharacterDetails(details);
    };
    fetchData();
  }, [getCharacterDetails, id]);

  return (
    <CharacterDetailsWrapper onClick={onClose}>
      <DetailsContainer onClick={(event) => event.stopPropagation()}>
        {characterDetails ? (
          <>
            <h2>{characterDetails.name}</h2>
            <DetailRow>
              <DetailLabel>Birth Year:</DetailLabel>
              {characterDetails.birth_year}
            </DetailRow>
            <DetailRow>
              <DetailLabel>Eye Color:</DetailLabel>
              {characterDetails.eye_color}
            </DetailRow>
            <DetailRow>
              <DetailLabel>Gender:</DetailLabel>
              {characterDetails.gender}
            </DetailRow>
            <DetailRow>
              <DetailLabel>Hair Color:</DetailLabel>
              {characterDetails.hair_color}
            </DetailRow>
            <DetailRow>
              <DetailLabel>Height:</DetailLabel>
              {characterDetails.height} cm
            </DetailRow>
            <DetailRow>
              <DetailLabel>Mass:</DetailLabel>
              {characterDetails.mass} kg
            </DetailRow>
            <DetailRow>
              <DetailLabel>Skin Color:</DetailLabel>
              {characterDetails.skin_color}
            </DetailRow>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </DetailsContainer>
    </CharacterDetailsWrapper>
  );
};

export default CharacterDetails;
