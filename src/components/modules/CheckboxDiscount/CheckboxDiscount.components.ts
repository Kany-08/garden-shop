import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const StyledCheckboxDiscount = styled.div`
  width: 234px;
  height: 36px;
  label {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 36px;
    height: 36px;
    border: 1px solid ${theme.colors.greyDivider};
    border-radius: ${theme.sizes.radius.sm};
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${theme.colors.green};
    }

    &:checked {
      background-color: ${theme.colors.green};
      border-color: ${theme.colors.green};
    }

    &:checked::after {
      content: "✓";
      color: ${theme.colors.white};
      font-size: 18px;
      font-weight: bold;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.lightGrey};
    }
  }
`;
