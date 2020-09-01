import React, { ReactElement, useContext, useMemo } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import { VisitedCountryContext } from '../../contexts/visitedCountryContext';
import FetchStatus from './FetchStatus';

type SearchResultProps = {
  fetchState: IFetchState;
  countriesToShow: ICountry[];
};

const SearchResult = ({ fetchState, countriesToShow }: SearchResultProps) => {
  const { error, isLoading } = fetchState;
  const { addToVisited } = useContext(VisitedCountryContext);

  return useMemo(() => {
    if (error || isLoading) {
      return <FetchStatus text={error ? error : 'Loading...'} />;
    }
    return countriesToShow.length ? (
      <ul>
        {countriesToShow.map(
          (country): ReactElement => (
            <CountryItem
              key={country.code}
              handleClick={addToVisited}
              country={country}
            />
          )
        )}
      </ul>
    ) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countriesToShow]);
};

export default SearchResult;
