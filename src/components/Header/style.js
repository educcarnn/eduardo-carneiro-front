import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 0px;
  padding: 0px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;