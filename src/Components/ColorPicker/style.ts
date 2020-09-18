import styled from 'styled-components';
import { colors } from '../../theme/theme';
import { flexMixin } from '../../theme/mixins';

type LabelProps = {
  color: string;
  checked: boolean;
};

const { red, red100, yellow, green, blue, blue100 } = colors;

export const colorsToPicked = [red, red100, yellow, green, blue, blue100];

export const Wrapper = styled.div`
  ${flexMixin({
    direction: 'column',
    wrap: 'nowrap',
  })};

  position: absolute;
  bottom: 15%;
  left: 0;
  border: 3px solid #707070;
  background: #707070;
  border-radius: 5px;
  width: 30px;
  height: 150px;
`;

export const Label = styled.label<LabelProps>`
  flex: 1;
  cursor: pointer;
  background: ${({ color }) => color};
  box-shadow: ${({ checked }) => checked && 'inset 0 0 0 3px #ffff'};
  &:first-of-type {
    border-radius: 5px 5px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 5px 5px;
  }
  & input {
    visibility: hidden;
  }
`;
