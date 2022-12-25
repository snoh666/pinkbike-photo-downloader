import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before,*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Titillium Web', sans-serif;
  }

  :root {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }

  body {
    background: ${({ theme }) => theme.colors.redLight};
    padding: 4px;
  }
`;

export default GlobalStyles;
