import React, { useState, useEffect } from "react";
import { Input, InputWrapper, Label, StyledIcon } from "./style";

type SearchBarProps = {
  value: string;
  handleInputChange: IEvent<HTMLInputElement>;
};

const SearchBar = ({ value, handleInputChange }: SearchBarProps) => {
  const [IsLabelFloat, setIsLabelFloat] = useState(false);

  useEffect(() => {
    value ? setIsLabelFloat(true) : setIsLabelFloat(false);
  }, [value]);

  return (
    <InputWrapper>
      <StyledIcon />
      <Label htmlFor="search" labelFloat={IsLabelFloat}>
        Search for a country...
      </Label>
      <Input
        labelFloat={IsLabelFloat}
        id="search"
        type="text"
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </InputWrapper>
  );
};

export default SearchBar;
