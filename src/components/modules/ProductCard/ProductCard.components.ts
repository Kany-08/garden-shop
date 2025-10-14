import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const StyledCardContainer = styled.div`
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: ${theme.sizes.radius.medium};
  border: 1px solid ${theme.colors.greyDivider};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 316px;
  height: 422px;
  cursor: pointer;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 70%;
  object-fit: contain;
`;

export const StyledInfoContainer = styled.div`
  padding: 20px 32px 32px 32px;
  border-top: 1px solid ${theme.colors.greyDivider};
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  justify-content: center;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;
