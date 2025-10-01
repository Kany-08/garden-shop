import { type JSX } from "react";
import { StyledSaleBadge } from "./SaleBadge.components";
import type { SaleBadgeProps } from "./SaleBadge.types";

const SaleBadge = ({ children }: SaleBadgeProps): JSX.Element => {
  return <StyledSaleBadge>{children}</StyledSaleBadge>;
};

export default SaleBadge;
