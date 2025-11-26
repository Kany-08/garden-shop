import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledList = styled.nav<{ $isDark: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0;
  margin: 0;

  a {
    font-family: ${theme.fonts.family};
    text-decoration: none;
    font-size: ${theme.fonts.size.lg};
    font-weight: ${theme.fonts.weight.medium};
    cursor: pointer;
    transition: color 0.3s;
    color: ${theme.colors.black};

    &:hover {
      color: ${theme.colors.green};
    }

    ${({ $isDark }) =>
      $isDark &&
      `
      color: ${theme.colors.white};
      &:hover {
        color: ${theme.colors.green};
      }
    `}
  }

  @media (max-width: 1000px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;

    a {
      font-size: ${theme.fonts.size.default};
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 36px;
    align-items: flex-start;

    a {
      font-size: ${theme.fonts.size.xl};
    }
  }

  @media (max-width: 360px) {
    gap: 32px;

    a {
      font-size: ${theme.fonts.size.normal};
    }
  }
`;
