type MediaQuery = {
  [breakpoint: string]: number;
};

const breakpoints: MediaQuery = {
  xs: 420,
  s: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const colors = {
  white: "#ffffff",
  light: "#fafafa",
  light100: "#e6e8ed",
  light200: "#e0e2e6",
  dark: "#18191a",
  dark100: "#17171a",
  gray: "#626262",
  gray100: "#3a3b3c",
  gray200: "#242526",
  red: "#B93423",
  red100: "#DB402B",
  yellow: "#FBCC33",
  green: "#428c08",
  blue: "#1173DE",
  blue100: "#5948EB",
};

const sheredTheme = {
  gray: colors.gray,
  green: colors.green,
  red100: colors.red100,
  light: colors.light200,
  shadow: colors.gray100,
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "1.2rem",
    s: "1.4rem",
    m: "1.6rem",
    lg: "2rem",
    xl: "2.4rem",
  },
  mq: Object.keys(breakpoints).reduce<Record<string, string>>(
    (acc, breakpoint) => {
      acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
      return acc;
    },
    {}
  ),
};

export const lightTheme = {
  ...sheredTheme,
  body: colors.light,
  text: colors.dark,
  buttonBcg: colors.light200,
  buttonBcgHover: colors.light100,
  element: colors.white,
};

export const darkTheme = {
  ...sheredTheme,
  body: colors.dark,
  text: colors.light200,
  buttonBcg: colors.gray100,
  buttonBcgHover: colors.gray,
  element: colors.gray200,
};
