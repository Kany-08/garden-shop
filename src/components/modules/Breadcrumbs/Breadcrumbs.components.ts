import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import { Breadcrumbs } from "@mui/material";

export const StyledBreadcrumbsContainer = styled.div``;

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  .MuiBreadcrumbs-li {
    /* width: 118px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center; */
    font-family: ${theme.fonts.family};
    font-size: ${theme.fonts.size.default};
    font-weight: ${theme.fonts.weight.medium};
    border: 1px solid ${theme.colors.greyDivider};
    border-radius: ${theme.sizes.radius.sm};
    padding: 8px 16px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.grey};
  }

  .MuiBreadcrumbs-separator {
    display: inline-block;
    width: 16px;
    height: 1px;
    background-color: ${theme.colors.greyDivider};
    margin: 0;
  }

  .MuiTypography-root {
    color: ${theme.colors.grey};
  }
`;
