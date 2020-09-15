import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 100%;
`;

export const StyledReactTooltip = styled(ReactTooltip)`
  background: ${({ theme }) => theme.element} !important;
  color: ${({ theme }) => theme.text} !important;

  &:after {
    border-top-color: ${({ theme }) => theme.element} !important;
  }
`;
