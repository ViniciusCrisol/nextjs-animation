import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f1f1f1;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${({ theme }) => theme.colors.background};
  }


  *, input, button, body {
    font-size: 16px;
    font-family: Roboto Mono, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }
`;
