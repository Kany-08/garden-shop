import type { JSX } from "react";
import { StyledIconWrapper } from "./Icon.components";
import { iconMap, type IconProps } from "./Icon.types";

export const Icon = ({
  name,
  size = "semiMedium",
  ...props
}: IconProps): JSX.Element => {
  const Component = iconMap[name];
  return (
    <StyledIconWrapper name={name} size={size}>
      <Component {...props} />
    </StyledIconWrapper>
  );
};
