import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;