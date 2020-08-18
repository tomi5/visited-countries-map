import React from "react";
import { Wrapper, Label } from "./style";

type ColorPickerProps = {
  onClick: IEvent<any>;
  pickedColor: string;
};

const colorArray: string[] = [
  "#B93423",
  "#DB402B",
  "#FBCC33",
  "#428C08",
  "#1173DE",
  "#5948EB",
];

const ColorPicker = ({ pickedColor, ...props }: ColorPickerProps) => {
  return (
    <Wrapper>
      {colorArray.map((HEX: string, index: number) => (
        <Label color={HEX} key={index} checked={HEX === pickedColor}>
          <input
            readOnly
            data-color={HEX}
            checked={HEX === pickedColor}
            type='radio'
            {...props}
          />
        </Label>
      ))}
    </Wrapper>
  );
};

export default ColorPicker;
