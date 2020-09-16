import styled, { css } from "styled-components";

export const Heading = styled.h1`
  display: none;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xl};
    font-weight: ${theme.fontWeight.bold};
  `};

  ${({ theme }) => theme.mq.md} {
    display: block;
  }
`;
