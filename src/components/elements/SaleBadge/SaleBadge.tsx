import { type JSX } from "react";
import { StyledSaleBadge } from "./SaleBadge.components";

import { useSalePercentageContext } from "../../../context/SalePercentageContext";

const SaleBadge = (): JSX.Element => {
  const { percentage } = useSalePercentageContext();

  return <StyledSaleBadge>-{percentage}%</StyledSaleBadge>;
};

export default SaleBadge;
