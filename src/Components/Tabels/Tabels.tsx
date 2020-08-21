import React, { useContext, useReducer, useState, useEffect } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Tabel from "./Tabel";
import {
  continentReducer,
  initialState,
} from "../../reducers/countriesByContinent";
import { addToContinent, getContinentName } from "../../utils/continentUtils";

const Tabels = () => {
  const { visitedCountries } = useContext(VisitedCountryContext);
  const [lastAddedCountry, setLastAddedCountry] = useState<ICountry>();
  const [continents, dispatch] = useReducer(continentReducer, initialState);

  useEffect(() => {
    setLastAddedCountry([...visitedCountries].pop());
  }, [visitedCountries]);

  useEffect(() => {
    if (lastAddedCountry !== undefined) {
      const continentName = getContinentName(
        lastAddedCountry
      ) as ContinentsToShow;
      const countriesByContinent = continents[continentName];
      dispatch({
        type: continentName,
        payload: addToContinent(countriesByContinent, lastAddedCountry),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAddedCountry]);

  return (
    <>
      {Object.entries(continents).map(([continentName, countries]) => {
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
