import styled, { css } from "styled-components";
import ReactTooltip from "react-tooltip";
import { ReactComponent as Map } from "../../assets/world.svg";
import { flexMixin } from "../../theme/mixins";

export const Wrapper = styled.div`
  ${flexMixin({
    direction: "column",
  })}
  position: relative;
  flex: 1 0 100%;
`;

export const StyledMap = styled(Map)`
  height: calc(100% - 80px);
`;

export const StyledReactTooltip = styled(ReactTooltip)`
  ${({ theme }) => css`
    background: ${theme.element} !important;
    color: ${theme.text} !important;
  `};

  &:after {
    border-top-color: ${({ theme }) => theme.element} !important;
  }
`;
