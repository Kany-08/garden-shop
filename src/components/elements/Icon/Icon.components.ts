import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IconProps } from "./Icon.types";

export const StyledIconWrapper = styled.span<IconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
    `}

  ${({ size }) =>
    size === "semiMedium" &&
    css`
      width: clamp(32px, 4vw, 48px);
      height: clamp(32px, 4vw, 48px);
    `}

    ${({ size }) =>
    size === "large" &&
    css`
      width: clamp(53px, 4vw, 60px);
      height: clamp(28px, 4vw, 32px);
    `}
`;
