import React, { ReactElement, useMemo } from 'react';
import CountryItem from '../CountryItem/CountryItem';

import FetchStatus from './FetchStatus';

type SearchResultProps = {
  fetchState: IFetchState;
  countriesToShow: ICountry[];
  handleClick: (e: any) => void; // FIXME - fix "any" type
};

const SearchResult = ({
  fetchState,
  countriesToShow,
  handleClick
}: SearchResultProps) => {
  const { error, isLoading } = fetchState;

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
              handleClick={handleClick}
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
