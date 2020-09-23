import {} from "styled-components";
import { lightTheme } from "./theme/theme";

declare module "styled-components" {
  type Theme = typeof lightTheme;
  export interface DefaultTheme extends Theme {}
}
