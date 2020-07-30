import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border: 3px solid #707070;
  background-color: #707070;
  border-radius: 5px;
  width: 120px;
  height: 20px;
`;

const Label = styled.label`
  flex: 1;
  cursor: pointer;
  background: ${(props: { color: string }) => props.color};
  box-shadow: ${(props: { checked: boolean }) =>
    props.checked && "inset 0 0 0 3px #ffff"};
  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }
  & input {
    visibility: hidden;
  }
`;

type Props = {
  handleColorPicker: (e: { target: any }) => void;
  pickedColor: string;
};

const ColorPicker: React.FC<Props> = ({ pickedColor, handleColorPicker }) => {
  const colorArray = [
    "#B93423",
    "#DB402B",
    "#FBCC33",
    "#428C08",
    "#1173DE",
    "#5948EB",
  ];

  return (
    <Wrapper>
      {colorArray.map((HEX, index) => (
        <Label color={HEX} key={index} checked={HEX === pickedColor}>
          <input
            readOnly
            data-color={HEX}
            checked={HEX === pickedColor}
            onClick={handleColorPicker}
            type='radio'
          />
        </Label>
      ))}
    </Wrapper>
  );
};

export default ColorPicker;
