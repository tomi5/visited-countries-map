const colors = {
  white: "#ffffff",
  light: "#fafafa",
  dark: "#363537",
  gray: "#858585",
};

export const lightTheme: Theme = {
  body: colors.light,
  text: colors.dark,
  input: colors.gray,
  element: colors.dark,
};

export const darkTheme: Theme = {
  body: colors.dark,
  text: colors.light,
  input: colors.gray,
  element: colors.light,
};
