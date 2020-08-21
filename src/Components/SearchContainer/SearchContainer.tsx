import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { SelectedCountryContext } from "../../contexts/selectedCountryContext";
import useFetchCountry from "../../hooks/useFetchCountry";

const SearchContainer = () => {
  const [value, setValue] = useState("");

  const { handleSelectCountry } = useContext(SelectedCountryContext);

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
        handleSelectCountry={handleSelectCountry}
      />
    </>
  );
};

export default SearchContainer;
