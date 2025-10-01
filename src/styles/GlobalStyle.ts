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
    line-height: 1.5;
  }

  button {
    font-family: inherit;
    border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  }
`;
