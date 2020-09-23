import styled, { css } from "styled-components";
import { flexMixin } from "../../theme/mixins";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { ExpandMore } from "@styled-icons/material/ExpandMore";

export const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;

export const StyledAccordion = styled(Accordion)`
  && {
    ${({ theme }) => css`
      background: ${theme.buttonBcg};
      border: 1px solid ${theme.gray};
      box-shadow: 0px 2px 3px ${theme.gray};
    `};
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  && {
    & div {
      justify-content: flex-start;
      ${({ theme }) => theme.mq.s} {
        justify-content: center;
      }
    }
  }
`;

export const ListTitle = styled.h2`
  text-align: left;
  text-transform: upperCase;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.mq.s} {
    text-align: center;
    margin-left: 55px;
  }
  ${({ theme }) => theme.mq.xl} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const List = styled.ul`
  flex: 1;
  list-style: none;
  ${flexMixin({
    align: "stretch",
  })}
  color: ${({ theme }) => theme.text};
`;

export const StyledExpandIcon = styled(ExpandMore)`
  width: 30px;
  color: ${({ theme }) => theme.text};
`;
