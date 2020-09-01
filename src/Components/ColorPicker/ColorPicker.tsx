import React, { memo } from 'react';
import { Wrapper, Label } from './style';

type ColorPickerProps = {
  handleClick: IEvent<any>;
  pickedColor: string;
};

const colorArr: string[] = [
  '#B93423',
  '#DB402B',
  '#FBCC33',
  '#428C08',
  '#1173DE',
  '#5948EB'
];

const ColorPicker = ({ pickedColor, handleClick }: ColorPickerProps) => (
  <Wrapper>
    {colorArr.map((HEX: string) => (
      <Label color={HEX} key={HEX} checked={HEX === pickedColor}>
        <input
          readOnly
          data-color={HEX}
          checked={HEX === pickedColor}
          type='radio'
          onClick={handleClick}
        />
      </Label>
    ))}
  </Wrapper>
);

export default memo(ColorPicker);
