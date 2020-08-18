import React from "react";

type SearchBarProps = {
  value: string;
  onChange: IEvent<HTMLInputElement>;
};

const SearchBar = ({ ...props }: SearchBarProps) => (
  <>
    <label>
      Search for a country...
      <input type='text' {...props} />
    </label>
  </>
);
export default SearchBar;
