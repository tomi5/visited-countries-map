import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

import useFetchCountry from "../../hooks/useFetchCountry";
import { SelectedCountryContext } from "../../contexts/SelectedCountryContext";

const SearchContainer = () => {
  const [value, setValue] = useState("");

  //   const { fetchState } = useFetchCountry(value);

  const { handleSelectCountry } = useContext(SelectedCountryContext);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <SearchBar value={value} onChange={handleInputChange} />
      <SearchResult {...fetchState} handleSelectCountry={handleSelectCountry} />
    </div>
  );
};

export default SearchContainer;
