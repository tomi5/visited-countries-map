import styled, { css } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { flexMixin, transitionMixin } from "../../theme/mixins";

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  padding: 5px 0;
  ${flexMixin({
    align: "center",
    justify: "center",
  })};
  ${({ theme }) => css`
    background: ${theme.buttonBcg};
    box-shadow: ${theme.shadow} 0px -3px 10px -8px;
    color: ${theme.text};
  `};
`;

export const Link = styled.a`
  padding: 5px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  ${flexMixin({
    align: "center",
    justify: "center",
  })};

  &:hover {
    span {
      transform: scale(1.3);
    }
  }
`;

export const Emoji = styled.span`
  display: inline-block;
  margin: 0 5px;
  color: red;
  transform: scale(1);
  ${transitionMixin({ properties: ["transform"] })}
`;

export const IconStyleWrapper = styled.div`
  margin-right: 10px;
  height: 30px;
  ${StyledIconBase} {
    height: 100%;
  }
`;
