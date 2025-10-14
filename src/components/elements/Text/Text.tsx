import type { JSX } from "react";
import { StyledText } from "./Text.components";
import type { TextProps } from "./Text.types";

const getHtmlTag = (variant: TextProps["variant"]) => {
  const tagMap = {
    heading96: "h1",
    heading64: "h2",
    heading40: "h3",
    heading20: "h4",
    dicount20: "span",
    body16: "p",
    price40: "span",
    price64: "span",
    oldPrice20: "span",
    oldPrice40: "span",
    navLinkText16: "a",
    navLinkText20: "a",
  } as const;

  return tagMap[variant || "body16"];
};

export const Text = ({
  variant = "body16",
  color = "black",
  align = "left",
  weight = "regular",
  truncate = false,
  crossedOut = false,
  className,
  children,
}: TextProps): JSX.Element => {
  const Component = StyledText.withComponent(getHtmlTag(variant));

  return (
    <Component
      $variant={variant}
      $color={color}
      $align={align}
      $weight={weight}
      $truncate={truncate}
      $crossedOut={crossedOut}
      className={className}
    >
      {children}
    </Component>
  );
};

export default Text;
