import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "tertiary";
  inputSize?: "small" | "medium" | "large";
  placeholder?: string;
  hasError?: boolean;
  fullWidth?: boolean;
  type: "text" | "number" | "phone" | "checkbox";
  value?: string | number | readonly string[] | undefined;
}
