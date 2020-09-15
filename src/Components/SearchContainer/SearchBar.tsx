import React from "react";
import { Input, InputWrapper, Label } from "./style";

type SearchBarProps = {
  value: string;
  handleInputChange: IEvent<HTMLInputElement>;
};

const SearchBar = ({ value, handleInputChange }: SearchBarProps) => {
  return (
    <InputWrapper>
      <Label htmlFor="search" labelFloat={value ? true : false}>
        Search for a country...
      </Label>
      <Input
        labelFloat={value ? true : false}
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
