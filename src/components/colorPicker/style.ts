import styled from "styled-components";
import { colors } from "../../theme/theme";
import { flexMixin } from "../../theme/mixins";

type LabelProps = {
  color: string;
  checked: boolean;
};

const { red, red100, yellow, green, blue, blue100 } = colors;

export const colorsToPicked = [red, red100, yellow, green, blue, blue100];

export const Wrapper = styled.div`
  align-self: flex-end;
  width: 150px;
  height: 30px;
  margin-bottom: 30px;
  border: 3px solid #707070;
  background: #707070;
  border-radius: 5px;
  ${flexMixin({
    direction: "row",
  })};

  ${({ theme }) => theme.mq.md} {
    align-self: center;
    width: 30px;
    height: 150px;
    margin-bottom: 0;
    ${flexMixin({
      direction: "column",
      wrap: "nowrap",
    })}
  }
`;

export const Label = styled.label<LabelProps>`
  flex: 1;
  cursor: pointer;
  background: ${({ color }) => color};
  box-shadow: ${({ checked }) => checked && "inset 0 0 0 3px #ffff"};
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  & input {
    visibility: hidden;
  }

  ${({ theme }) => theme.mq.md} {
    &:first-of-type {
      border-radius: 5px 5px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 5px 5px;
    }
  }
`;
