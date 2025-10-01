import type { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.components";
import type { JSX } from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "small",
  type = "button",
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton variant={variant} size={size} type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
