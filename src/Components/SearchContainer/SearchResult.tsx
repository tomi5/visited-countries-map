import React, { ReactElement } from "react";
import CountryItem from "../CountryItem/CountryItem";

type SearchResultProps = {
  state: IFetchState;
  countriesToShow: ICountry[];
  handleSelectCountry: IEvent<any>;
};

const SearchResult = ({
  state,
  countriesToShow,
  handleSelectCountry,
}: SearchResultProps) => {
  const { error, isLoading } = state;

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return countriesToShow.length ? (
    <ul>
      {countriesToShow.map(
        (country): ReactElement => (
          <CountryItem
            key={country.code}
            onClick={handleSelectCountry}
            country={country}
          />
        )
      )}
    </ul>
  ) : null;
};

export default SearchResult;
