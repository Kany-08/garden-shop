import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 36px;
    align-items: flex-start;
  }

  @media (max-width: 360px) {
    gap: 32px;
  }
`;

export const StyledListItem = styled.li`
  font-family: inherit;
  cursor: pointer;
  transition: color 0.3s;

  .list-item {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${theme.colors.green};
    }
  }

  @media (max-width: 768px) {
    .list-item {
      font-size: ${theme.fonts.size.default};
    }
  }

  @media (max-width: 480px) {
    .list-item {
      font-size: ${theme.fonts.size.xl};
    }
  }

  @media (max-width: 360px) {
    .list-item {
      font-size: ${theme.fonts.size.normal};
    }
  }
`;
