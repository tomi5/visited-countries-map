import React, { ReactElement } from 'react';
import RemoveButton from '../Buttons/RemoveButton';
import CountryItem from '../CountryItem/CountryItem';

type TabelProps = {
  continentName: string;
  visitedCountry: ICountry[];
  onClick: any;
};

const Tabel = ({ continentName, visitedCountry, ...props }: TabelProps) => (
  <ul key={continentName}>
    <h2>
      {continentName} ({visitedCountry.length})
    </h2>
    {visitedCountry.map(
      (country): ReactElement => (
        <CountryItem key={country.code} country={country} continent={continentName}>
          <RemoveButton {...props} />
        </CountryItem>
      )
    )}
  </ul>
);

export default Tabel;
