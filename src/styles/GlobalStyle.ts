import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { css } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ $isDark: boolean }>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  font-family: ${theme.fonts.family};
  font-size: ${theme.fonts.size.default};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: ${theme.sizes.breakpoints.Desktop}px;
  margin: 0 auto;
  color: ${theme.colors.black};
  background-color: ${theme.colors.bgWhite};

  ${({ $isDark }) =>
    $isDark &&
    css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      span,
      a,
      li,
      button {
        color: ${theme.colors.white};
      }
    `}

  
}

button {
  font-family: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.app {
  padding: 0 2.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${theme.sizes.breakpoints.smDesktop}px) {
    padding: 0 1.5em;
  }

  
}

`;
