import type { JSX } from "react";
import type { InputProps } from "./Input.types";
import { StyledInput } from "./Input.components";

export const Input = ({
  variant = "primary",
  inputSize = "small",
  type = "text",
  hasError,
  fullWidth,
  value,
  placeholder,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <StyledInput
      variant={variant}
      inputSize={inputSize}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
