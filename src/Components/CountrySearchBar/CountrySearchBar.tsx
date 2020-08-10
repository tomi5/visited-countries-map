import React from "react";

type CountrySearchBarProps = {
  onChange: IEvent<HTMLInputElement>;
  value: string;
};

const CountrySearchBar = ({ ...props }: CountrySearchBarProps) => {
  return (
    <>
      <label>
        Type Country Name:
        <input type='text' {...props} />
      </label>
    </>
  );
};

export default CountrySearchBar;
