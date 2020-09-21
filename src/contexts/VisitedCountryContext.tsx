import React, { createContext, useState, useEffect, useReducer } from "react";
import {
  continentReducer,
  initialState,
} from "../reducers/countriesByContinent";
import {
  getCountryID,
  addToContinent,
  getContinentName,
  findCountryInArray,
  removeCountryFromArray,
  fillWithColor,
  resetMapColoring,
} from "../utils/utils";
import useFetchCountry from "../hooks/useFetchCountry";
import useLocalStorage from "../hooks/useLocalStorage";
import useHelpingStates from "../hooks/useHelpingStates";

type ContextTypes = {
  allCountries: ICountry[];
  visitedCountries: ICountry[];
  selectedCountryCode: string | null;
  countriesByContinent: CountriesByContinent | null;
  countryToRemove: CountryToRemove | null;
  addToVisited: IEvent<any>; // FIXME - fix "any" type
  resetHelpingStates: () => void;
  shouldDeleteFromVisited: (
    e: any,
    action?: Exclude<ActionTypes, "add">
  ) => void; // FIXME - fix "any" type
  deleteFromVisited: (countryToRemove: CountryToRemove | null) => void;
};

export const VisitedCountryContext = createContext<ContextTypes>({
  allCountries: [],
  visitedCountries: [],
  selectedCountryCode: null,
  countriesByContinent: null,
  countryToRemove: null,
  addToVisited: () => null,
  resetHelpingStates: () => null,
  shouldDeleteFromVisited: () => null,
  deleteFromVisited: () => null,
});
type Props = {
  children: React.ReactNode;
};

interface IUpdateVisitedAfterRemove {
  arrToUpdate: ICountry[];
  countryToRemoveID: string;
  setStateFn: {
    (value: React.SetStateAction<ICountry[]>): void;
    (arg0: ICountry[]): void;
  };
}
export const dispatchFn = (object: IDispatchObj) => {
  const {
    type,
    continent,
    continentsState,
    country,
    payloadFn,
    dispatchfn,
  } = object;
  dispatchfn({
    type,
    continent,
    payload: payloadFn(continentsState[continent as ContinentsToShow], country),
  });
};

const updateVisitedAfterRemove = (obj: IUpdateVisitedAfterRemove) => {
  const { arrToUpdate, countryToRemoveID, setStateFn } = obj;
  const updatedArr = removeCountryFromArray(arrToUpdate, countryToRemoveID);
  setStateFn(updatedArr);
};

const VisitedCountryContextProvider = ({ children }: Props) => {
  const [storedValue, setLocalStorage] = useLocalStorage("visited", []);
  const { allCountries } = useFetchCountry("");
  const {
    lastAddedCountry,
    setLastAddedCountry,
    selectedCountryCode,
    setSelectCountryCode,
    countryToRemove,
    setCountryToRemove,
    resetHelpingStates,
  } = useHelpingStates();

  const [continentsState, dispatch] = useReducer(
    continentReducer,
    initialState
  );

  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);
  const [
    countriesByContinent,
    setCountriesByContinent,
  ] = useState<CountriesByContinent | null>(null);

  const matchCountryAndContinent = (country: ICountry) => {
    const continentName = getContinentName(country) as ContinentsToShow;
    const dispatchObj: IDispatchObj = {
      type: "add",
      continent: continentName,
      continentsState: continentsState,
      country: country,
      payloadFn: addToContinent,
      dispatchfn: dispatch,
    };
    return [
      dispatchFn(dispatchObj),
      fillWithColor(country.code, country.color),
    ];
  };

  // SET INITIAL STATE WITH LOCALSTORAGE
  useEffect(() => {
    setVsitedCountries(storedValue);
    storedValue.map((country: ICountry) => matchCountryAndContinent(country));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const lastItem = [...visitedCountries].pop();
    setLocalStorage(visitedCountries); // set localStorage
    if (!lastItem) return;
    setLastAddedCountry(lastItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitedCountries]);

  useEffect(() => {
    setCountriesByContinent(continentsState);
  }, [continentsState]);

  // ADD LAST ADDED COUNTRY TO RELEVANT TABLE BY CONTINENT
  useEffect(() => {
    if (!lastAddedCountry) return;
    matchCountryAndContinent(lastAddedCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAddedCountry]);

  const addToVisited: IEvent<any> = (e) => {
    // FIXME - fix "any" type
    const target = e.target.dataset.id || e.target.parentNode.dataset.id;
    const countryCode = target;
    countryCode && setSelectCountryCode(countryCode);
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);
    if (!countryDetails) return;
    !isVisited && setVsitedCountries([...visitedCountries, countryDetails]);
  };

  const resetAllData = () => {
    resetHelpingStates();
    setVsitedCountries([]);
    dispatch({ type: "reset" });
    resetMapColoring();
  };

  const deleteFromVisited = (countryToRemove: CountryToRemove | null) => {
    if (!countryToRemove) {
      return resetAllData();
    }
    const { continentName, countryToRemoveID } = countryToRemove;

    const dispatchObj: IDispatchObj = {
      type: "delete",
      continent: continentName,
      continentsState: continentsState,
      country: countryToRemoveID,
      payloadFn: removeCountryFromArray,
      dispatchfn: dispatch,
    };
    dispatchFn(dispatchObj);

    updateVisitedAfterRemove({
      arrToUpdate: visitedCountries,
      countryToRemoveID,
      setStateFn: setVsitedCountries,
    });
    fillWithColor(countryToRemoveID);
    resetHelpingStates();
  };

  const shouldDeleteFromVisited = (
    e: any,
    action?: Exclude<ActionTypes, "add">
  ) => {
    // FIXME - fix "any" type
    resetHelpingStates();
    if (action === "reset") return;

    const countryToRemoveID: string = getCountryID(e);
    const continentName: ContinentsToShow = getContinentName(findCountryInArray(allCountries, countryToRemoveID) as ICountry);
    setCountryToRemove({ countryToRemoveID, continentName });

  };

  const value = {
    allCountries,
    visitedCountries,
    selectedCountryCode,
    countriesByContinent,
    countryToRemove,
    addToVisited,
    resetHelpingStates,
    shouldDeleteFromVisited,
    deleteFromVisited,
  };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;
