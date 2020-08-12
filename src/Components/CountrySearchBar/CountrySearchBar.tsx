import React from "react";

type CountrySearchBarProps = {
  onChange: IEvent<HTMLInputElement>;
  value: string;
};

const CountrySearchBar = ({ ...props }: CountrySearchBarProps) => {
  console.log("log z searchbar");
  return (
    <>
      <label>
        Search for a country...
        <input type='text' {...props} />
      </label>
    </>
  );
};

export default CountrySearchBar;
