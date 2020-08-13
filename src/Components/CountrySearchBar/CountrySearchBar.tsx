import React from "react";

type CountrySearchBarProps = {
  onChange: IEvent<HTMLInputElement>;
  value: string;
};

const CountrySearchBar = ({ ...props }: CountrySearchBarProps) => (
  <>
    <label>
      Search for a country...
      <input type='text' {...props} />
    </label>
  </>
);

export default CountrySearchBar;
