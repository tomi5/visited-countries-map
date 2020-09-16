import styled, { css } from "styled-components";
import { flexMixin } from "../../theme/mixins";

export const ModalBodyWrapper = styled.div`
  position: absolute;
  ${flexMixin({
    direction: "column",
  })}
  ${({ theme }) => css`
    background: ${theme.element};
    color: ${theme.text};
    box-shadow: 2px 2px 5px ${theme.gray};
  `};

  padding: 20px;
  width: 40%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  outline: none;
`;

export const Text = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  ${flexMixin({
    direction: "column",
    justify: "center",
  })}
  ${({ theme }) => theme.mq.s} {
    ${flexMixin({
      direction: "row",
      justify: "center",
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
