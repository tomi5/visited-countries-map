import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  display: none;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.m};
    font-weight: ${theme.fontWeight.bold};
  `};

  ${({ theme }) => theme.mq.md} {
    display: block;
  }
  ${({ theme }) => theme.mq.lg} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
