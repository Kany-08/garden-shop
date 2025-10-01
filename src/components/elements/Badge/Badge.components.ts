import { Badge } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

export const BadgeCircle = styled(Badge)`
  .MuiBadge-badge {
    background-color: ${theme.colors.green};
    width: clamp(1.417em, 4vw, 2.167em);
    height: clamp(1.417em, 4vw, 2.167em);
    top: 0.75em;
    left: 0.75em;
    border-radius: 50%;
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.semiBold};
    font-size: ${theme.fonts.size.xs};
  }
`;
