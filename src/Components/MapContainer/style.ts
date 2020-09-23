import styled, { css } from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { ReactComponent as Map } from '../../assets/world.svg';
import { flexMixin } from '../../theme/mixins';

export const Wrapper = styled.div`
  ${flexMixin({
    direction: 'column',
    align: 'flex-start',
    justify: 'space-between',
  })};
  position: relative;
  flex: 1 0 100%;
  margin-bottom: 30px;

  ${({ theme }) => theme.mq.md} {
    ${flexMixin({
      direction: 'row',
      align: 'flex-start',
      justify: 'space-between',
      wrap: 'nowrap',
    })}
  }

  ${({ theme }) => theme.mq.lg} {
    margin-bottom: 0;
  }
`;

export const StyledMap = styled(Map)`
  flex: 1;
  height: 100%;
`;

export const StyledReactTooltip = styled(ReactTooltip)`
  ${({ theme }) => css`
    background: ${theme.element} !important;
    color: ${theme.text} !important;
    font-size: ${theme.fontSize.s} !important;
  `};

  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize.m} !important;
  }
  &:after {
    border-top-color: ${({ theme }) => theme.element} !important;
  }
`;
