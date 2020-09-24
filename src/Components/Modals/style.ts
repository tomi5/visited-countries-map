import styled, { css } from 'styled-components';
import { flexMixin } from '../../theme/mixins';

type ModalBodyWrapperProps = {
  info: boolean;
};

export const ModalBodyWrapper = styled.div<ModalBodyWrapperProps>`
  position: absolute;
  ${({ theme }) => css`
    background: ${theme.element};
    color: ${theme.text};
    box-shadow: 2px 2px 5px ${theme.gray};
  `};
  padding: 20px;
  top: 50%;
  left: 50%;
  height: ${({ info }) => (info ? '65vh' : 'auto')};
  width: 80%;
  border-radius: 10px;
  outline: none;
  transform: translate(-50%, -50%);
  overflow: auto;
  ${({ theme }) => theme.mq.lg} {
    width: 40%;
  }
`;

export const Text = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const ButtonsContainer = styled.div`
  ${flexMixin({
    direction: 'column',
    justify: 'center',
  })}
  ${({ theme }) => theme.mq.s} {
    ${flexMixin({
      direction: 'row',
      justify: 'center',
    })}
  }
`;

export const Heading = styled.h1`
  display: block;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.bold};
  `};

  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`;

export const StyledP = styled.p`
  padding-bottom: 20px;

  &:first-of-type {
    margin-top: 15px;
  }
`;

export const InfoList = styled.dl`
  list-style: none;
`;

export const ListItemTitle = styled.dt`
  text-decoration: underline;
  padding-bottom: 5px;
`;

export const ListItem = styled.dd`
  font-style: italic;
  padding-left: 10px;
  padding-bottom: 15px;
`;
