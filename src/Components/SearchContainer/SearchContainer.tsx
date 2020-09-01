import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import useFetchCountry from '../../hooks/useFetchCountry';

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange: IEvent<HTMLInputElement> = e => {
    setSearchValue(e.target.value);
  };

  const { fetchState, countriesToShow } = useFetchCountry(searchValue);

  return (
    <>
      <SearchBar value={searchValue} handleInputChange={handleInputChange} />
      <SearchResult fetchState={fetchState} countriesToShow={countriesToShow} />
    </>
  );
};

export default SearchContainer;
