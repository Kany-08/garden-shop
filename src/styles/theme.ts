// src/styles/theme.ts
export const theme = {
  colors: {
    bgWhite: "#FFFFF1",
    green: "#92A134",
    sale: "#F26D22",
    greyDivider: "#DDDDDD",
    grey: "#8B8B8B",
    lightGrey: "#F2F6D3",
    black: "#424436",
    white: "#FFFFFF",
  },

  sizes: {
    spacing: {
      xxsm: " 0.375em", // 6px
      xsm: "0.5em", // 8px
      default: "1em", // 16px
      small: "1.5em", // 24px
      medium: "2em", // 32px
      normal: "2.25em", // 36px
      large: "2.5em", // 40px
      xl: "5rem", // 80px
    },
    radius: {
      sm: "0.375em",
      medium: "0.75em",
    },
    breakpoints: {
      bigMobile: 480,
      tablet: 768,
      smDesktop: 1000,
      Desktop: 1440,
    },
  },

  fonts: {
    family: "Montserrat",
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    size: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      default: "1rem", // 16px
      normal: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24 px
      title: {
        primary: "6rem", // 96
        secondary: "4rem", // 64
        normal: "2.5rem", // 40
        small: "1.25rem", // 20
      },
      button: {
        default: "1.25rem",
      },
      nav: "1.25rem",
    },
  },
};

// Типы для TypeScript
export type Theme = typeof theme;
