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
  cursor: pointer;

  &::placeholder {
    color: ${theme.colors.grey};
  }

  /* Variants */
  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.bgWhite};
      border: 1px solid ${theme.colors.greyDivider};
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      border: 1px solid ${theme.colors.bgWhite};

      &::placeholder {
        color: ${theme.colors.white};
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
      padding: ${theme.sizes.spacing.xsm} ${theme.sizes.spacing.default};
    `}

  ${({ inputSize }) =>
    inputSize === "large" &&
    css`
      padding: ${theme.sizes.spacing.default} ${theme.sizes.spacing.medium};
      font-size: ${theme.fonts.size.lg};
    `}
`;
