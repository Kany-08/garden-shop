import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import type { InputProps } from "./Input.types";

export const StyledInput = styled.input<InputProps>`
  /* Base */
  border: none;
  color: white;
  background-color: transparent;
  font-size: ${theme.fonts.size.default};
  border-radius: ${theme.sizes.radius.sm};

  /* opacity: 0; */

  &::placeholder {
    color: ${theme.colors.grey};
    font-size: ${theme.fonts.size.default};
  }

  /* Variants */
  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.greyDivider};
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      border: 1px solid ${theme.colors.bgWhite};

      &::placeholder {
        color: ${theme.colors.grey};
        font-size: ${theme.fonts.size.default};
      }
    `}

    ${({ variant }) =>
    variant === "tertiary" &&
    css`
      border: 1px solid ${theme.colors.greyDivider};
    `}

  /* Sizes */
  ${({ inputSize }) =>
    inputSize === "small" &&
    css`
      width: 36px;
      height: 36px;
      display: block;
    `}

  ${({ inputSize }) =>
    inputSize === "medium" &&
    css`
      width: 112px;
      height: 36px;
    `}

  ${({ inputSize }) =>
    inputSize === "large" &&
    css`
      padding: ${theme.sizes.spacing.default} ${theme.sizes.spacing.medium};
      font-size: ${theme.fonts.size.lg};
    `}
`;
