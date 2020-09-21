import styled, { css } from 'styled-components';
import { flexMixin } from '../../theme/mixins';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
  padding: 25px;
  border-radius: 15px;
  ${({ theme }) => css`
    background: ${theme.buttonBcg};
    border: 1px solid ${theme.gray};
    box-shadow: 0px 3px 6px ${theme.gray};
  `};
`;

export const ListTitle = styled.h2`
  text-align: center;
  text-transform: upperCase;
`;

export const List = styled.ul`
  margin-top: 25px;
  list-style: none;
  ${flexMixin({
    align: 'stretch',
  })}
`;
