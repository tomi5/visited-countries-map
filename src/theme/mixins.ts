import { css } from "styled-components";

type FlexTypes = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

export const flexMixin = ({
  direction = "row",
  wrap = "wrap",
  align = "stretch",
  justify = "flex-start",
}: FlexTypes) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    align-items: ${align};
    justify-content: ${justify};
  `;
};

export const transitionMixin = (
  properties: string[],
  time = 0.3,
  timing = "ease"
) => {
  const value = properties
    .map((prop) => `${prop} ${time}s ${timing}`)
    .join(", ");
  return css`
    transition: ${value};
  `;
};
