import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    height: 100%;

    background-color: #f1f1f1;
    -webkit-font-smoothing: antialiased !important;
  }

  *, input, button, body {
    color: #171717;
    font-size: 16px;
    font-family: Roboto Mono, sans-serif;
  }
`;
