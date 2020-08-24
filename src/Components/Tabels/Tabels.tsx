import React, { useContext, useReducer, useEffect } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Tabel from "./Tabel";
import {
  continentReducer,
  initialState,
} from "../../reducers/countriesByContinent";
import { addToContinent, getContinentName } from "../../utils/continentUtils";
import { fillWithColor } from "../../utils/fillWithColor";

import { removeCountryFromArray } from "../../utils/findCountryInArray";

const Tabels = () => {
  const {
    visitedCountries,
    updateVisited,
    resetSelectedCountry,
    lastAddedCountry,
    resetLastAddedCountry,
  } = useContext(VisitedCountryContext);

  const [continents, dispatch] = useReducer(continentReducer, initialState);

  useEffect(() => {
    if (lastAddedCountry !== null) {
      const continentName = getContinentName(
        lastAddedCountry
      ) as ContinentsToShow;
      dispatch({
        type: continentName,
        continent: continentName,
        payload: addToContinent(continents[continentName], lastAddedCountry),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAddedCountry]);

  const handleRemoveFromVisited: RemoveButton = (e) => {
    e.preventDefault();
    resetSelectedCountry();
    resetLastAddedCountry();
    const countryToRemove = e.target.parentNode;
    const countryToRemoveID = countryToRemove.dataset.id;
    const countryToRemoveContinent = countryToRemove.dataset
      .continent as ContinentsToShow;
    dispatch({
      type: countryToRemoveContinent,
      continent: countryToRemoveContinent,
      payload: removeCountryFromArray(
        continents[countryToRemoveContinent],
        countryToRemoveID
      ),
    });
    updateVisited(removeCountryFromArray(visitedCountries, countryToRemoveID));
    fillWithColor(countryToRemoveID);
  };

  return (
    <>
      {Object.entries(continents).map(([continentName, countries]) => {
        return countries.length ? (
          <Tabel
            key={continentName}
            continentName={continentName}
            visitedCountry={countries}
            onClick={handleRemoveFromVisited}
          />
        ) : null;
      })}
    </>
  );
};

export default Tabels;
