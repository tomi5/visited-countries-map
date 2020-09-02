import React, { useContext } from 'react';
import { VisitedCountryContext } from '../../contexts/visitedCountryContext';
import Tabel from './Tabel';

const Tabels = () => {
  const { countriesByContinent } = useContext(VisitedCountryContext);

  return (
    <>
      {countriesByContinent &&
        Object.entries(countriesByContinent).map(([continentName, countries]) => {
          return countries.length ? (
            <Tabel
              key={continentName}
              continentName={continentName}
              visitedCountry={countries}
            />
          ) : null;
        })}
    </>
  );
};

export default Tabels;
