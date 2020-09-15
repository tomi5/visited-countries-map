import styled, { css } from "styled-components";
import { paddingVertical, paddingHorizontal } from "../SearchContainer/style";

const FlagWidth = "45px";

export const ListItem = styled.li`
  z-index: 1;

  ${({ listType }) =>
    listType === "searchResult" &&
    css`
      background: ${({ theme }) => theme.buttonBcgHover};

      &:nth-child(1) {
        border-top: 1px solid ${({ theme }) => theme.element};
      }

      &:nth-last-child(1) {
        border-radius: 0 0 10px 10px;
      }

      &:hover,
      &:focus {
        background: ${({ theme }) => theme.buttonBcg};
      }
    `}
`;

export const Flag = styled.img`
  padding-right: ${paddingVertical};
  width: ${FlagWidth};
  height: auto;
`;

export const CountryName = styled.p`
  text-align: left;
`;

export const StyledButton = styled.button`
  display: flex;
  padding: ${paddingHorizontal};
  width: 100%;
  height: 100%;
  background: transparent;
  color: inherit;
  transition: background 0.3s ease;
  align-items: center;
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
