import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const PriceRangeContainer = styled.div`
  width: 309px;
  height: 36px;
  label {
    display: flex;
    align-items: center;
    gap: 16px;

    input {
      border: none;
      width: 112px;
      height: 36px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyDivider};
      border-radius: ${theme.sizes.radius.sm};
      padding-left: 16px;

      &::placeholder {
        color: ${theme.colors.grey};
        font-size: ${theme.fonts.size.default};
      }

      &:focus {
        outline: 2px solid ${theme.colors.green};
        border: none;
        box-shadow: 0 0 0 2px ${theme.colors.lightGrey};
      }

      &:hover {
        border: 1px solid ${theme.colors.green};
      }

      &:invalid {
        border: 1px solid ${theme.colors.grey};
      }

      &:disabled {
        background-color: ${theme.colors.lightGrey};
      }
    }
  }
`;
