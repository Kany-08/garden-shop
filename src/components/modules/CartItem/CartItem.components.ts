import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const StyledCartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 780px;
  height: 180px;
  border: 1px solid ${theme.colors.greyDivider};
  border-radius: ${theme.sizes.radius.medium};
  background-color: ${theme.colors.white};
  overflow: hidden;
`;

export const StyledImageContainer = styled.div`
  width: 200px;
  height: 180px;

  object-fit: contain;
  border-right: 1px solid ${theme.colors.greyDivider};
`;

export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 32px;
  padding: 32px;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

export const StyledRemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.black};
  font-size: 1.25rem;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;
