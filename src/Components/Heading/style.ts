import styled from "styled-components";

export const Heading = styled.h1`
  display: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${({ theme }) => theme.mq.md} {
    display: block;
  }
`;
