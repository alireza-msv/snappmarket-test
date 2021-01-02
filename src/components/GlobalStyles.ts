import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: myriad-arabic, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: myriad-arabic, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  *, *:after, *:before {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
