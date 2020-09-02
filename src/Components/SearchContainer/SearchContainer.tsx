import React, { useState, useContext } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import useFetchCountry from '../../hooks/useFetchCountry';
import { VisitedCountryContext } from '../../contexts/VisitedCountryContext';

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  const { addToVisited } = useContext(VisitedCountryContext);

  const handleInputChange: IEvent<HTMLInputElement> = e => {
    setSearchValue(e.target.value);
  };

  const handleClick = (e: any) => {
    // FIXME - fix "any" type
    addToVisited(e);
    setSearchValue('');
  };

  const { fetchState, countriesToShow } = useFetchCountry(searchValue);

  return (
    <>
      <SearchBar value={searchValue} handleInputChange={handleInputChange} />
      <SearchResult
        fetchState={fetchState}
        countriesToShow={countriesToShow}
        handleClick={(e: any) => handleClick(e)} // FIXME - fix "any" type
      />
    </>
  );
};

export default SearchContainer;
