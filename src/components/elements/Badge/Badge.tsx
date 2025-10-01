import type { JSX } from "react";
import { BadgeCircle } from "./Badge.components";

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps): JSX.Element => {
  return (
    <BadgeCircle
      badgeContent={4}
      color="success"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {children}
    </BadgeCircle>
  );
};
