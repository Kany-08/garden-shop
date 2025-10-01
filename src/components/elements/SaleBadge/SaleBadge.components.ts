import styled from "@emotion/styled";

import { theme } from "../../../styles/theme";

export const StyledSaleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fonts.weight.semiBold};
  color: ${theme.colors.white};
  position: absolute;
  z-index: 1;

  background-color: ${theme.colors.sale};
  padding: 4px 8px;
  border-radius: ${theme.sizes.radius.sm};
  font-size: ${theme.fonts.size.lg}; /* 20px */
  font-weight: ${theme.fonts.weight.semiBold};
  top: 8px;
  left: 8px;
`;
