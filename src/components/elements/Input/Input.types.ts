import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "tertiary";
  inputSize?: "small" | "medium" | "large";
  hasError?: boolean;
  fullWidth?: boolean;
}
