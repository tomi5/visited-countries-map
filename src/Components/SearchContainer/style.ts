import styled from "styled-components";

export const paddingHorizontal = "10px";
export const paddingVertical = "5px";
const borderRadius = paddingHorizontal;
const elementHeight = "30px";

export const Wrapper = styled.div`
  position: relative;
  margin: 15px 0;
  width: 250px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${elementHeight};
`;

export const Label = styled.label`
  position: absolute;
  background: ${({ theme }) => theme.yellow};
  left: ${paddingHorizontal};
  right: 0;
  width: 100%;
  height: 100%;
  line-height: ${elementHeight};
  font-style: italic;
  font-size: ${({ labelFloat, theme }) =>
    labelFloat ? theme.fontSize.s : theme.fontSize.m};
  transform: translateY(${({ labelFloat }) => (labelFloat ? "-90%" : "0")});
  transition: font-size 0.3s ease, transform 0.3s ease;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.buttonBcg};
  padding: ${`${paddingVertical} ${paddingHorizontal}`};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: ${({ value }) =>
    value.length >= 2 ? `${borderRadius} ${borderRadius} 0 0` : borderRadius};
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: background 0.3s ease, border-radius 0.3s ease;
  &:focus {
    background: ${({ theme }) => theme.buttonBcgHover};
  }
`;

export const ListContainer = styled.ul`
  position: absolute;
  top: ${elementHeight};
  left: 0;
  right: 0;
  margin-bottom: 20px;
  list-style: none;
  z-index: 1;
`;

export const StatusText = styled.p`
  padding: ${`${paddingVertical} ${paddingHorizontal}`};
  background: ${({ theme }) => theme.buttonBcgHover};
  border-top: 1px solid ${({ theme }) => theme.element};
  border-radius: ${`0 0 ${borderRadius} ${borderRadius}`};
`;
