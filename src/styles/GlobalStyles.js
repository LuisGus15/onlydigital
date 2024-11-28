// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-fa#1308EBFFial', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyles;
