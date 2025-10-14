import { useState, type JSX } from "react";
import { StyledIconWrapper } from "./Icon.components";
import { iconMap, type IconProps } from "./Icon.types";

export const Icon = ({
  name,
  size = "semiMedium",
  togglePair,
  hoverIcon,
  ...props
}: IconProps): JSX.Element => {
  const [active, setActive] = useState(false);
  const [isHovered, setHovered] = useState(false);

  let currentName: keyof typeof iconMap = name;

  if (togglePair && active) {
    currentName = togglePair[1];
  } else if (togglePair && !active) {
    currentName = togglePair[0];
  }

  if (hoverIcon && isHovered && !active) {
    currentName = hoverIcon;
  }

  const toggle = () => {
    if (togglePair) {
      setActive((prev) => !prev);
    }
  };

  const Component = iconMap[currentName];
  return (
    <StyledIconWrapper
      name={name}
      size={size}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
    >
      <Component {...props} />
    </StyledIconWrapper>
  );
};
