import React, { ReactElement } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import RemoveContainer from '../Remove/RemoveContainer';

type TabelProps = {
  continentName: string;
  visitedCountry: ICountry[];
};

const Tabel = ({ continentName, visitedCountry, ...props }: TabelProps) => {
  return (
    <ul key={continentName}>
      <h2>
        {continentName} ({visitedCountry.length})
      </h2>
      {visitedCountry.map(
        (country): ReactElement => (
          <CountryItem
            key={country.code}
            country={country}
            continent={continentName}
          >
            <RemoveContainer action={'delete'} />
          </CountryItem>
        )
      )}
    </ul>
  );
};

export default Tabel;
