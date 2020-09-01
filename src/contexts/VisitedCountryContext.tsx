import React, { createContext, useState, useEffect, useReducer } from 'react';
import { continentReducer, initialState } from '../reducers/countriesByContinent';
import {
  addToContinent,
  getContinentName,
  findCountryInArray,
  removeCountryFromArray,
  fillWithColor,
  resetMapColoring
} from '../utils/utils';
import useFetchCountry from '../hooks/useFetchCountry';
import useLocalStorage from '../hooks/useLocalStorage';

type Props = {
  children: React.ReactNode;
};

interface updateVisitedAfterRemove {
  arrToUpdate: ICountry[];
  countryToRemoveID: string;
  setStateFn: {
    (value: React.SetStateAction<ICountry[]>): void;
    (arg0: ICountry[]): void;
  };
}

const dispatchFn = (object: IDispatchObj) => {
  const {
    type,
    continent,
    continentsState,
    country,
    payloadFn,
    dispatchfn
  } = object;
  dispatchfn({
    type,
    continent,
    payload: payloadFn(continentsState[continent as ContinentsToShow], country)
  });
};

const updateVisitedAfterRemove = (obj: updateVisitedAfterRemove) => {
  const { arrToUpdate, countryToRemoveID, setStateFn } = obj;
  const updatedArr = removeCountryFromArray(arrToUpdate, countryToRemoveID);
  setStateFn(updatedArr);
};

const VisitedCountryContextProvider = ({ children }: Props) => {
  const { allCountries } = useFetchCountry('');
  const [storedValue, setLocalStorage] = useLocalStorage('visited', []);
  const [continentsState, dispatch] = useReducer(continentReducer, initialState);
  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);
  const [lastAddedCountry, setLastAddedCountry] = useState<ICountry | null>(null);
  const [selectedCountryCode, setSelectCountryCode] = useState<null | string>(null);

  const [
    countriesByContinent,
    setCountriesByContinent
  ] = useState<CountriesByContinent | null>(null);

  const [countryToRemove, setCountryToRemove] = useState<CountryToRemove | null>(
    null
  );

  // USE LOCALSTORAGE DATA
  useEffect(() => {
    setVsitedCountries(storedValue);
    storedValue.map((el: ICountry) => {
      const continentName = getContinentName(el) as ContinentsToShow;
      const dispatchObj: IDispatchObj = {
        type: 'add',
        continent: continentName,
        continentsState: continentsState,
        country: el,
        payloadFn: addToContinent,
        dispatchfn: dispatch
      };
      return [dispatchFn(dispatchObj), fillWithColor(el.code, el.color)];
    });

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
    const continentName = getContinentName(lastAddedCountry) as ContinentsToShow;
    const dispatchObj: IDispatchObj = {
      type: 'add',
      continent: continentName,
      continentsState: continentsState,
      country: lastAddedCountry,
      payloadFn: addToContinent,
      dispatchfn: dispatch
    };
    dispatchFn(dispatchObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAddedCountry]);

  const addToVisited: IEvent<any> = e => {
    const countryCode = e.target.dataset.id;
    countryCode && setSelectCountryCode(countryCode);
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);
    if (!countryDetails) return;
    !isVisited && setVsitedCountries([...visitedCountries, countryDetails]);
  };

  const resetSelectedAndLastAdded = () => {
    setSelectCountryCode(null);
    setLastAddedCountry(null);
    setCountryToRemove(null);
  };

  const handleResetAllData = () => {
    resetSelectedAndLastAdded();
    setVsitedCountries([]);
    dispatch({ type: 'reset' });
    resetMapColoring();
  };

  const deleteFromVisited = (countryToRemove: CountryToRemove | null) => {
    if (!countryToRemove) {
      return handleResetAllData();
    }

    const { continentName, countryToRemoveID } = countryToRemove;

    const dispatchObj: IDispatchObj = {
      type: 'delete',
      continent: continentName,
      continentsState: continentsState,
      country: countryToRemoveID,
      payloadFn: removeCountryFromArray,
      dispatchfn: dispatch
    };

    dispatchFn(dispatchObj);

    updateVisitedAfterRemove({
      arrToUpdate: visitedCountries,
      countryToRemoveID,
      setStateFn: setVsitedCountries
    });

    fillWithColor(countryToRemoveID);

    resetSelectedAndLastAdded();
  };

  const shouldDeleteFromVisited = (e: any, action?: Exclude<ActionTypes, 'add'>) => {
    resetSelectedAndLastAdded();
    if (action === 'reset') return;
    const node: NodeTypes = e.target.nodeName.toLowerCase();
    let countryToRemoveID: string;
    let continentName: ContinentsToShow;

    switch (node) {
      case 'path':
        countryToRemoveID = e.target.dataset.id;
        const countryDetails = findCountryInArray(allCountries, countryToRemoveID);
        continentName = getContinentName(countryDetails as ICountry);
        break;
      case 'button':
        countryToRemoveID = e.target.parentNode.dataset.id;
        continentName = e.target.parentNode.dataset.continent;
        break;
      default:
        return;
    }
    setCountryToRemove({ countryToRemoveID, continentName });
  };

  const value = {
    allCountries,
    visitedCountries,
    selectedCountryCode,
    countriesByContinent,
    countryToRemove,
    addToVisited,
    resetSelectedAndLastAdded,
    shouldDeleteFromVisited,
    deleteFromVisited
  };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;

interface IContextProps {
  allCountries: ICountry[];
  visitedCountries: ICountry[];
  selectedCountryCode: string | null;
  countriesByContinent: CountriesByContinent | null;
  countryToRemove: CountryToRemove | null;
  addToVisited: IEvent<any>;
  resetSelectedAndLastAdded: () => void;
  shouldDeleteFromVisited: (e: any, action?: Exclude<ActionTypes, 'add'>) => void;
  deleteFromVisited: (countryToRemove: CountryToRemove | null) => void;
}

export const VisitedCountryContext = createContext<IContextProps>({
  allCountries: [],
  visitedCountries: [],
  selectedCountryCode: null,
  countriesByContinent: null,
  countryToRemove: null,
  addToVisited: () => null,
  resetSelectedAndLastAdded: () => null,
  shouldDeleteFromVisited: () => null,
  deleteFromVisited: () => null
});
