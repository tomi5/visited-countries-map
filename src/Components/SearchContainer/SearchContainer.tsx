import React, { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import useFetchCountry from "../../hooks/useFetchCountry";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import { Wrapper } from "./style";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const { addToVisited } = useContext(VisitedCountryContext);

  const handleInputChange: IEvent<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e: any) => {
    // FIXME - fix "any" type
    addToVisited(e);
    setSearchValue("");
    console.log(e.target);
  };

  const { fetchState, countriesToShow } = useFetchCountry(searchValue);

  return (
    <Wrapper>
      <SearchBar value={searchValue} handleInputChange={handleInputChange} />
      <SearchResult
        fetchState={fetchState}
        countriesToShow={countriesToShow}
        handleClick={(e: any) => handleClick(e)} // FIXME - fix "any" type
      />
    </Wrapper>
  );
};

export default SearchContainer;
