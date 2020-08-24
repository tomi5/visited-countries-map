import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import useFetchCountry from "../../hooks/useFetchCountry";

type SearchContainerProps = {
  allCountries: ICountry[];
};
const SearchContainer = ({ allCountries }: SearchContainerProps) => {
  const [value, setValue] = useState("");

  const handleInputChange: IEvent<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const { state, countriesToShow } = useFetchCountry(value);

  return (
    <>
      <SearchBar value={value} onChange={handleInputChange} />
      <SearchResult
        state={state}
        countriesToShow={countriesToShow}
        allCountries={allCountries}
      />
    </>
  );
};

export default SearchContainer;
