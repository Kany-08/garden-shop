import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 316px;
  height: 392px;
  cursor: pointer;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: ${theme.sizes.radius.medium};
`;

export const StyledInfoContainer = styled.div`
  padding: 16px 0 2px;
`;
