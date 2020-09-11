import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const StyledReactTooltip = styled(ReactTooltip)`
  background-color: ${({ theme }) => theme.element} !important;
  color: ${({ theme }) => theme.text} !important;

  &:after {
    border-top-color: ${({ theme }) => theme.element} !important;
  }
`;
