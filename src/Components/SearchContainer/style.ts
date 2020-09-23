import styled, { css } from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { transitionMixin } from "../../theme/mixins";

type LabelProps = {
  labelFloat: boolean;
};

type InptuProps = Pick<LabelProps, "labelFloat"> & {
  value: string;
};

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

export const Label = styled.label<LabelProps>`
  position: absolute;
  left: 40px;
  right: 0;
  width: 100%;
  height: 100%;
  line-height: ${elementHeight};
  font-style: italic;
  font-size: ${({ labelFloat, theme }) =>
    labelFloat ? theme.fontSize.s : theme.fontSize.m};
  transform: translateY(${({ labelFloat }) => (labelFloat ? "-90%" : "0")});
  cursor: text;
  ${transitionMixin({ properties: ["font-size", "transform"] })};
`;

export const StyledIcon = styled(SearchAlt)`
  position: absolute;
  left: ${paddingHorizontal};
  top: 50%;
  bottom: 0;
  width: 25px;
  transform: translateY(-50%);
  cursor: default;
  & * {
    cursor: default;
  }
`;

export const Input = styled.input<InptuProps>`
  ${({ theme, value }) => css`
    background: ${theme.buttonBcg};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.m};
    color: ${theme.text};
    border-radius: ${value.length >= 2
      ? `${borderRadius} ${borderRadius} 0 0`
      : borderRadius};
  `};
  width: 100%;
  height: 100%;
  padding: ${`${paddingVertical} 40px`};
  outline: none;
  ${transitionMixin({ properties: ["background", "border-radius"] })};

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
  z-index: 100;
`;

export const StatusText = styled.p`
  padding: ${`${paddingVertical} ${paddingHorizontal}`};
  background: ${({ theme }) => theme.buttonBcgHover};
  border-top: 1px solid ${({ theme }) => theme.element};
  border-radius: ${`0 0 ${borderRadius} ${borderRadius}`};
`;
