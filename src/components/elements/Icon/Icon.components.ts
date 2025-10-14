import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IconProps } from "./Icon.types";

export const StyledIconWrapper = styled.span<IconProps>`
  cursor: pointer;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({ size }) =>
    size === "xsm" &&
    css`
      width: 14px;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      width: 24px;
      height: 24px;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      width: 44px;
      height: 44px;

      @media (max-width: 480px) {
        width: 32px;
        height: 32px;
      }
    `}

    ${({ size }) =>
    size === "social" &&
    css`
      width: 44px;
      height: 44px;
    `}

  ${({ size }) =>
    size === "semiMedium" &&
    css`
      width: 48px;
      height: 48px;

      @media (max-width: 1000px) {
        width: 44px;
        height: 44px;
      }

      @media (max-width: 480px) {
        width: 32px;
        height: 32px;
      }
    `}

    ${({ size }) =>
    size === "large" &&
    css`
      width: 60px;
      height: 32px;

      @media (max-width: 768px) {
        width: 52.5px;
        height: 28px;
      }
    `}
`;
