import styled, { css } from "styled-components";

export const ButtonComponent = styled.button`
  font-size: 22px;
  border: none;
  height: 35px;
  cursor: pointer;

  ${({ name, theme }) =>
    name &&
    css`
      position: absolute;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.buttonBcg};
      color: ${theme.text};
      transform: translateY(-50%);
      transition: 0.3s background ease, 0.3s color ease;
      font-size: ${theme.fontSize.m};
      font-weight: ${theme.fontWeight.medium};
    `};

  ${({ name, theme }) => {
    switch (name) {
      case "info":
        return `left: 0;     
      border-radius: 50%;     
      width: 35px;        
      &:hover {
        background: #428c08;
        color: white;
      }`;
      case "mode":
        return `right: 0;
        padding: 5px 15px;
        min-width: 130px;
        border-radius: 10px;  
        &:hover {
        background: ${theme.buttonBcgHover};        
      }`;
      default:
        return;
    }
  }};

  &:focus {
    outline: 1px solid #c7c7c7;
  }
`;

export const Icon = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background: ${({ bg }) => `url(${bg}) no-repeat center`};
  background-size: 100%;
  transition: 0.3s;
  filter: ${({ isDark }) => (isDark ? "invert(1)" : "invert(0)")};
`;
