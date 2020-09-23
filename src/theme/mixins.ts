import { css } from "styled-components";
import { Property } from "csstype";

type FlexProps = {
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  align?: Property.AlignItems;
  justify?: Property.JustifyContent;
};

export const flexMixin = ({
  direction = "row",
  wrap = "wrap",
  align = "stretch",
  justify = "flex-start",
}: FlexProps) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    align-items: ${align};
    justify-content: ${justify};
  `;
};

type TransitionProps = {
  properties: string[];
  time?: number;
  timing?: Property.TransitionTimingFunction;
};

export const transitionMixin = ({
  properties,
  time = 0.3,
  timing = "ease",
}: TransitionProps) => {
  const value = properties
    .map((prop) => `${prop} ${time}s ${timing}`)
    .join(", ");
  return css`
    transition: ${value};
  `;
};

// export const positionMixin = (
//   position = "static",
//   t = "0",
//   b = "0",
//   l = "0",
//   r = "0"
// ): CSS.Properties => {
//   return css`
//     position: ${position};
//     top: ${t};
//     bottom: ${b};
//     left: ${l};
//     right: ${r};
//   `;
// };
