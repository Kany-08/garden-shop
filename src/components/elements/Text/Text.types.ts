import type React from "react";

export type Variant =
  | "heading96" //"h1", // banner > bold
  | "heading64" //"h2", // sections/ page not found > bold
  | "heading40" //"h3", // product title/pop-up  > bold
  | "heading20" //"h4", // card title/ description title  > semiBold
  | "dicount20" //"span", // sale-badge > semiBold
  | "body16" //"p", // p > description > regular
  | "price40" //"span", // card > semiBold
  | "price64" //"span", // product section > bold
  | "oldPrice20" //"span", // card > medium
  | "oldPrice40" //"span", // product section > medium
  | "navLinkText16" //"a", // navigation - mainPage/ breadcrumbs > medium (with border)
  | "navLinkText20"; //"a", // navigation - header > medium

export type Align = "left" | "center" | "right" | "justify";

export type Weight = "regular" | "medium" | "semiBold" | "bold";

export type Color = "white" | "grey" | "black";

export interface TextProps {
  variant?: Variant;
  color?: Color;
  align?: Align;
  weight?: Weight;
  truncate?: boolean;
  crossedOut?: boolean;
  children: React.ReactNode;
  className?: string;
}
