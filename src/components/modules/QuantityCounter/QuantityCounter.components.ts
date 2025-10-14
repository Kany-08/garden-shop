import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const StyledQuantityContainer = styled.div`
  width: 200px;
  height: 58px;
  border: 1px solid ${theme.colors.greyDivider};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: ${theme.sizes.radius.sm};
  text-align: center;

  button {
    background: ${theme.colors.white};
    width: 58px;
    height: 58px;
    border-radius: ${theme.sizes.radius.sm};
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${theme.colors.lightGrey};
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  button:first-of-type {
    border-left: none;
    border-right: 1px solid ${theme.colors.greyDivider};
  }

  button:last-of-type {
    border-right: none;
    border-left: 1px solid ${theme.colors.greyDivider};
  }
`;
