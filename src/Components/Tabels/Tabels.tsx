import React, { useContext, useReducer, useState, useEffect } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Tabel from "./Tabel";
import {
  continentReducer,
  initialState,
} from "../../reducers/countriesByContinent";

const Tabels = () => {
  const { visitedCountries } = useContext(VisitedCountryContext);
  const [lastAdded, setLastAdded] = useState<ICountry>();
  const [continents, dispatch] = useReducer(continentReducer, initialState);
  console.log("continents:", continents);

  const getLastAdded = (arr: ICountry[]) => {
    return [...arr].pop();
  };

  const pushToArray = (arr: ICountry[], country: ICountry): ICountry[] => {
    arr.push(country);
    return arr;
  };

  useEffect(() => {
    setLastAdded(getLastAdded(visitedCountries));
  }, [visitedCountries]);

  useEffect(() => {
    if (lastAdded !== undefined) {
      let dispatchType = lastAdded.region as Continents;
      const arrToPush = continents[dispatchType];
      dispatch({
        type: dispatchType,
        payload: pushToArray(arrToPush, lastAdded),
      });
    }
  }, [lastAdded]);

  return (
    <>
      {lastAdded && <p>Last: {lastAdded.name}</p>}

      <Tabel continentName={"Europe"} visitedCountry={continents.Europe} />
    </>
  );
};

export default Tabels;

/*
Africa => AFRICA
Americas:
    - South America  => SOUTH AMERICA
    - Northern America => NORTH AMERICA
    - Central America =>
    - Caribbean
Asia  => ASIA
Europe  => EUROPE
Oceania   => OCEANIA
Polar => ANTARTICA
"" => ANTARTICA
*/
