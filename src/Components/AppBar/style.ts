import styled, { css } from "styled-components";
import { flexMixin, transitionMixin } from "../../theme/mixins";

export const Wrapper = styled.div`
  ${flexMixin({
    justify: "center",
  })};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${({ theme }) => css`
    background: ${theme.element};
    box-shadow: ${theme.shadow} 0px 3px 10px -8px;
  `};

  ${transitionMixin(["background"])};
  z-index: 20;
  ${({ theme }) => theme.mq.xs} {
    height: 65px;
  }
`;

export const Header = styled.header`
  ${flexMixin({
    justify: "center",
    align: "center",
  })};
  position: relative;
  flex: 1;
  max-width: 1440px;
`;
