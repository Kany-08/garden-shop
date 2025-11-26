import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
}
