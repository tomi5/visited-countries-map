import React from 'react';

type SearchBarProps = {
  value: string;
  handleInputChange: IEvent<HTMLInputElement>;
};

const SearchBar = ({ value, handleInputChange }: SearchBarProps) => (
  <>
    <label>
      Search for a country...
      <input type='text' value={value} onChange={handleInputChange} />
    </label>
  </>
);

export default SearchBar;
