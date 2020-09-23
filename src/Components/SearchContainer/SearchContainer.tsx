import React, { useState, useContext, useRef, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import useFetchCountry from "../../hooks/useFetchCountry";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import { Wrapper } from "./style";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const { addToVisited } = useContext(VisitedCountryContext);
  const { fetchState, countriesToShow } = useFetchCountry(searchValue);
  const searchContainerRef = useRef(null);

  const handleInputChange: IEvent<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e: any) => {
    addToVisited(e);
    setSearchValue("");
  };

  const handleClickOutside = (e, ref) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setSearchValue("");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleClickOutside(e, searchContainerRef)
    );
    return () => {
      document.removeEventListener("mousedown", (e) =>
        handleClickOutside(e, searchContainerRef)
      );
    };
  }, [searchContainerRef]);

  return (
    <Wrapper ref={searchContainerRef}>
      <SearchBar value={searchValue} handleInputChange={handleInputChange} />
      <SearchResult
        fetchState={fetchState}
        countriesToShow={countriesToShow}
        handleClick={(e: any) => handleClick(e)}
      />
    </Wrapper>
  );
};

export default SearchContainer;
