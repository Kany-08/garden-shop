import styled from "@emotion/styled";
import type { Align, Color, Variant, Weight } from "./Text.types";
import { theme } from "../../../styles/theme";

interface StyledTextProps {
  $variant: Variant;
  $color: Color;
  $align: Align;
  $weight: Weight;
  $truncate: boolean;
  $crossedOut?: boolean;
}

const getVariantStyles = (variant: Variant) => {
  const variantMap = {
    heading96: {
      fontSize: theme.fonts.size.title.primary,
      fontWeight: theme.fonts.weight.bold,
    },

    heading64: {
      fontSize: theme.fonts.size.title.secondary,
      fontWeight: theme.fonts.weight.bold,
    },

    heading40: {
      fontSize: theme.fonts.size.title.normal,
      fontWeight: theme.fonts.weight.bold,
    },
    heading20: {
      fontSize: theme.fonts.size.title.small,
      fontWeight: theme.fonts.weight.semiBold,
    },
    dicount20: {
      fontSize: theme.fonts.size.lg,
      fontWeight: theme.fonts.weight.semiBold,
    },
    body16: {
      fontSize: theme.fonts.size.default,
      fontWeight: theme.fonts.weight.regular,
    },
    price40: {
      fontSize: theme.fonts.size.title.normal,
      fontWeight: theme.fonts.weight.semiBold,
    },
    price64: {
      fontSize: theme.fonts.size.title.secondary,
      fontWeight: theme.fonts.weight.bold,
    },
    oldPrice20: {
      fontSize: theme.fonts.size.lg,
      fontWeight: theme.fonts.weight.medium,
    },
    oldPrice40: {
      fontSize: theme.fonts.size.title.normal,
      fontWeight: theme.fonts.weight.medium,
    },
    navLinkText16: {
      fontSize: theme.fonts.size.default,
      fontWeight: theme.fonts.weight.medium,
    },
    navLinkText20: {
      fontSize: theme.fonts.size.lg,
      fontWeight: theme.fonts.weight.medium,
    },
  };

  return variantMap[variant];
};

const getColorStyles = (color: Color) => {
  const colorMap = {
    white: theme.colors.white,
    grey: theme.colors.grey,
    black: theme.colors.black,
  };

  return colorMap[color];
};

const getWeightStyles = (weight: Weight) => {
  const weightMap = {
    regular: theme.fonts.weight.regular,
    medium: theme.fonts.weight.medium,
    semiBold: theme.fonts.weight.semiBold,
    bold: theme.fonts.weight.bold,
  };

  return weightMap[weight];
};

const getAlignStyles = (align: Align) => {
  const alignMap = {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
  };
  return alignMap[align];
};

export const StyledText = styled.span<StyledTextProps>`
  margin: 0;
  padding: 0;
  display: inline;

  ${({ $variant }) => {
    const styles = getVariantStyles($variant);
    return `
      font-size: ${styles.fontSize};
    `;
  }}

  color: ${({ $color }) => getColorStyles($color)};

  font-weight: ${({ $weight }) => getWeightStyles($weight)};

  text-align: ${({ $align }) => getAlignStyles($align)};

  ${({ $weight, $variant }) => {
    const variantWeight = getVariantStyles($variant).fontWeight;
    const customWeight = getWeightStyles($weight);
    return variantWeight !== customWeight && `font-weight: ${customWeight};`;
  }}

  ${({ $truncate }) =>
    $truncate &&
    `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}

  ${({ $crossedOut }) =>
    $crossedOut &&
    `
    text-decoration: line-through;
    color: ${theme.colors.grey};
  `}
`;
