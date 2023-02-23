import styled, { css } from "styled-components";
import { paddingVertical, paddingHorizontal } from "../searchContainer/style";
import { flexMixin, transitionMixin } from "theme/mixins";

type ListProps = {
  listType: "searchResult" | "tabel";
};

const FlagWidth = "45px";

export const ListItem = styled.li<ListProps>`
  z-index: 1;

  ${({ listType, theme }) =>
    listType === "searchResult" &&
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

  ${({ listType }) =>
    listType === "tabel" &&
    css`
      ${flexMixin({
        align: "stretch",
      })}
      flex: 0 0 100%;
      ${({ theme }) => theme.mq.s} {
        flex: 0 0 49%;
      }
      ${({ theme }) => theme.mq.xl} {
        flex: 0 0 33.3%;
      }
    `}
`;

export const StyledButton = styled.button`
  ${flexMixin({
    align: "center",
  })}
  padding: ${paddingHorizontal};
  width: 100%;
  height: 100%;
  background: transparent;
  color: inherit;
  ${transitionMixin({ properties: ["background"] })};
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.buttonBcg};
  }
`;

export const StyledDiv = styled.div`
  ${flexMixin({
    align: "center",
    justify: "space-between",
  })};
  flex: 1;
  margin: 10px;
  padding: ${`${paddingVertical} 30px`};
  align-items: center;
  border-radius: 15px;
  ${({ theme }) => css`
    border: 1px solid ${theme.gray};
    box-shadow: 0px 1px 2px ${theme.gray};
  `};
`;

export const Flag = styled.img`
  padding-right: ${paddingVertical};
  width: ${FlagWidth};
  height: auto;
`;

export const CountryName = styled.p`
  text-align: center;
  flex: 1;
  padding: 0 15px;
`;
