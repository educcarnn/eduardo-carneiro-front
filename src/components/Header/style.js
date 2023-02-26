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



const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    padding: 4px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid gray;
  }
`;

export default InputContainer;