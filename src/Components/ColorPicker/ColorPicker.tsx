import React, { memo } from "react";
import { Wrapper, Label, colorsToPicked } from "./style";


type ColorPickerProps = {
  handleClick: IEvent<any>; // FIXME - fix "any" type
  pickedColor: string;
};


const ColorPicker = ({ pickedColor, handleClick }: ColorPickerProps) => (
  <Wrapper title={"choose visited country's color"}>
    {colorsToPicked.map((HEX: string) => (
      <Label color={HEX} key={HEX} checked={HEX === pickedColor}>
        <input
          readOnly
          data-color={HEX}
          checked={HEX === pickedColor}
          type="radio"
          onClick={handleClick}
        />
      </Label>
    ))}
  </Wrapper>
);

export default memo(ColorPicker);
