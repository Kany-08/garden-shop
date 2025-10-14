import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.family};;
    color: ${theme.colors.black};
    /* line-height: 1.5; */
    max-width: 1440px;
    margin: 0 auto;
  }

  button {
    font-family: inherit;
    border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  }

  .app {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding-bottom: 80px;

    @media (max-width: 1000px) {
      padding: 0 20px;
    }
  }
`;
