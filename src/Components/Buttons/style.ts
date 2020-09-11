import styled, { css } from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding || 0};
  height: 35px;
  background: ${({ theme }) => theme.buttonBcg};
  color: ${({ theme }) => theme.text};
  line-height: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border: none;
  cursor: pointer;
  transition: 0.3s background ease, 0.3s color ease;
  &:hover {
    background: ${({ theme }) => theme.buttonBcgHover};
  }
  &:focus {
    outline: 1px solid #c7c7c7;
  }

  /* Styles for buttons with props name  */
  ${({ posAbsolute }) =>
    posAbsolute &&
    css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    `}

  /* styles for information button */
  ${({ name }) =>
    name === "info" &&
    css`
      left: 0;
      border-radius: 50%;

      &:hover {
        background: #428c08;
        color: white;
      }
    `}

  /* styles for toogleMode button */ 
  ${({ name }) =>
    name === "mode" &&
    css`
      right: 0;
      min-width: 130px;
      border-radius: 10px;
    `}
    
  /* styles for close button */
  ${({ name }) =>
    name === "close" &&
    css`
      border-radius: 50%;
    `}
`;

export const ButtonCLose = styled(Button)`
  align-self: flex-end;
`;

export const IconStyleWrapper = styled.div`
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : "0")};
  ${StyledIconBase} {
    height: 100%;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : "0")};
  }
`;
