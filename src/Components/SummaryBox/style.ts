import styled, { keyframes, css } from 'styled-components';
import { flexMixin } from '../../theme/mixins';

const keyframe = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {   
    transform: scale(1);
  }
`;

const animation = css`
  animation: ${keyframe} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
`;

export const Wrapper = styled.div`
  ${flexMixin({
    direction: 'column',
  })};
  margin: 15px 0;

  & p:first-of-type {
    padding-bottom: 10px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  display: inline-block;

  ${animation}
`;
