import styled from "styled-components";
import { flexMixin } from "../../theme/mixins";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Main = styled.main`
  padding-top: 80px;
  ${flexMixin({
    justify: "space-between",
  })}
`;
