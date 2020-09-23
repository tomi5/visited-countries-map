import React, { ReactElement } from "react";
import CountryItem from "../CountryItem/CountryItem";
import FetchStatus from "./FetchStatus";
import { ListContainer } from "./style";

type SearchResultProps = {
  fetchState: IFetchState;
  countriesToShow: ICountry[];
  handleClick: (e: any) => void;
};

const SearchResult = ({
  fetchState,
  countriesToShow,
  handleClick,
}: SearchResultProps) => {
  const { error, isLoading } = fetchState;

  function ListBody({ error, isLoading, countriesToShow }) {
    if (error || isLoading) {
      return <FetchStatus text={error ? error : "Loading..."} />;
    } else {
      return countriesToShow.length
        ? countriesToShow.map(
          (country): ReactElement => (
            <CountryItem
              listType="searchResult"
              key={country.code}
              country={country}
              handleClick={handleClick}
            />
          )
        )
        : null;
    }
  }

  return (
    <ListContainer>
      <ListBody
        error={error}
        isLoading={isLoading}
        countriesToShow={countriesToShow}
      />
    </ListContainer>
  );
};

export default SearchResult;
