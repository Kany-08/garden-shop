import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const StyledCardContainer = styled.div`
  margin-top: 1rem;
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: ${theme.sizes.radius.medium};
  border: 1px solid ${theme.colors.greyDivider};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 484px;
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

export const StyledSaleBadge = styled.span`
  font-weight: ${theme.fonts.weight.semiBold};
  color: ${theme.colors.white};
  position: absolute;
  z-index: 1;

  background-color: ${theme.colors.sale};
  padding: 4px 8px;
  border-radius: ${theme.sizes.radius.sm};
  font-size: ${theme.fonts.size.lg}; /* 20px */
  font-weight: ${theme.fonts.weight.semiBold};
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
