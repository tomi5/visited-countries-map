import styled, { css } from 'styled-components';
import { paddingVertical, paddingHorizontal } from '../SearchContainer/style';
import { flexMixin, transitionMixin } from '../../theme/mixins';

type ListProps = {
  styled: boolean;
};

const FlagWidth = '45px';

export const ListItem = styled.li<ListProps>`
  z-index: 1;

  ${({ styled, theme }) =>
    styled &&
    css`
      background: ${theme.buttonBcgHover};

      &:nth-child(1) {
        border-top: 1px solid ${theme.element};
      }

      &:nth-last-child(1) {
        border-radius: 0 0 10px 10px;
      }

      &:hover,
      &:focus {
        background: ${theme.buttonBcg};
      }
    `}
`;

export const StyledButton = styled.button`
  ${flexMixin({
    align: 'center',
  })}
  display: flex;
  padding: ${paddingHorizontal};
  width: 100%;
  height: 100%;
  background: transparent;
  color: inherit;
  ${transitionMixin({ properties: ['background'] })};
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.buttonBcg};
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  padding: ${paddingHorizontal};
  width: 100%;
  height: 100%;
  align-items: center;
  background: transparent;
`;

export const Flag = styled.img`
  padding-right: ${paddingVertical};
  width: ${FlagWidth};
  height: auto;
`;

export const CountryName = styled.p`
  text-align: left;
`;
