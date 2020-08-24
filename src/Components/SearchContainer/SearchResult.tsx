import React, { ReactElement, useContext } from "react";
import CountryItem from "../CountryItem/CountryItem";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";

type SearchResultProps = {
  state: IFetchState;
  countriesToShow: ICountry[];
  allCountries: ICountry[];
};

const SearchResult = ({
  state,
  countriesToShow,
  allCountries,
}: SearchResultProps) => {
  const { error, isLoading } = state;

  const { handleAddToVisited } = useContext(VisitedCountryContext);

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
            onClick={(e) => handleAddToVisited(e, allCountries)}
            country={country}
          />
        )
      )}
    </ul>
  ) : null;
};

export default SearchResult;
