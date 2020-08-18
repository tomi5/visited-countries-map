import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

import { SelectedCountryContext } from "../../contexts/SelectedCountryContext";
import useFetchCountry from "../../hooks/useFetchCountry";

const SearchContainer = () => {
  const [value, setValue] = useState("");

  const { handleSelectCountry } = useContext(SelectedCountryContext);

  const handleInputChange: IEvent<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const { state, countriesToShow } = useFetchCountry(value);

  return (
    <div style={{ border: "1px solid black" }}>
      <SearchBar value={value} onChange={handleInputChange} />
      <SearchResult
        state={state}
        countriesToShow={countriesToShow}
        handleSelectCountry={handleSelectCountry}
      />
    </div>
  );
};

export default SearchContainer;
