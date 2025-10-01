import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import type { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  /* Base */
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  border-radius: ${theme.sizes.radius.sm};
  font-size: ${theme.fonts.size.default};
  font-weight: ${theme.fonts.weight.semiBold};
  transition: all 0.2s ease;
  font-size: ${theme.fonts.size.lg};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.colors.black};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
  }

  /* Variants */
  ${({ variant }) => variant === "primary" && css``}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.bgWhite};
      color: ${theme.colors.black};

      &:hover:not(:disabled) {
        color: ${theme.colors.white};
      }

      &:active:not(:disabled) {
        background-color: ${theme.colors.lightGrey};
        color: ${theme.colors.green};
        border: none;
      }
    `}


  /* Sizes */
  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${theme.fonts.size.default};
      padding: ${theme.sizes.spacing.xxsm} ${theme.sizes.spacing.default};
      font-weight: ${theme.fonts.weight.medium};
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.8em 5em;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      padding: 0.8em 9em;
    `}
`;
