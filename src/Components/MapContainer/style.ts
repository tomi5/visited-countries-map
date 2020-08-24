import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export const StyledReactTooltip = styled(ReactTooltip)`
  background-color: white !important;
  color: black !important;
  box-shadow: 0px 2px 20px lightgray;
  &:after {
    border-top-color: white !important;
  }
`;
