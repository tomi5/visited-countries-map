import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  text-align: center;
`;
