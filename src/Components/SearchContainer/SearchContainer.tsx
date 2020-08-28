import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import useFetchCountry from '../../hooks/useFetchCountry';

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange: IEvent<HTMLInputElement> = e => {
    setSearchValue(e.target.value);
  };

  const { state, countriesToShow } = useFetchCountry(searchValue);

  return (
    <>
      <SearchBar value={searchValue} onChange={handleInputChange} />
      <SearchResult state={state} countriesToShow={countriesToShow} />
    </>
  );
};

export default SearchContainer;
