import React, { createContext, useState, useEffect, useReducer } from 'react';
import { continentReducer, initialState } from '../reducers/countriesByContinent';
import {
  addToContinent,
  getContinentName,
  findCountryInArray,
  removeCountryFromArray,
  fillWithColor,
} from '../utils/utils';
import useFetchCountry from '../hooks/useFetchCountry';

interface IContextProps {
  allCountries: ICountry[];
  visitedCountries: ICountry[];
  lastAddedCountry: ICountry | null;
  selectedCountryCode: string | null;
  countriesByContinent: CountriesByContinent | null;
  updateVisited: UpdateVisited;
  resetSelectAndLastAdded: () => void;
  handleAddToVisited: IEvent<any>;
  handleRemoveFromVisited: (e: any) => void;
}

type Props = {
  children: React.ReactNode;
};

const VisitedCountryContextProvider = ({ children }: Props) => {
  const { allCountries } = useFetchCountry('');
  const [continentsState, dispatch] = useReducer(continentReducer, initialState);
  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);
  const [lastAddedCountry, setLastAddedCountry] = useState<ICountry | null>(null);
  const [selectedCountryCode, setSelectCountryCode] = useState<null | string>(null);
  const [
    countriesByContinent,
    setCountriesByContinent,
  ] = useState<CountriesByContinent | null>(null);

  const updateVisited: UpdateVisited = arr => {
    setVsitedCountries(arr);
  };

  const resetSelectAndLastAdded = () => {
    setSelectCountryCode(null);
    setLastAddedCountry(null);
  };

  const dispatchFn = ({
    actionType,
    continentName,
    continentsState,
    country,
    payloadFn,
  }: IDispatchFn) => {
    dispatch({
      type: actionType,
      continent: continentName,
      payload: payloadFn(continentsState[continentName], country),
    });
  };

  const handleAddToVisited: IEvent<any> = e => {
    const countryCode = e.target.dataset.id;
    countryCode && setSelectCountryCode(countryCode);
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);
    if (countryDetails !== undefined) {
      !isVisited
        ? setVsitedCountries([...visitedCountries, countryDetails])
        : handleRemoveFromVisited(e);
    }
  };

  const handleRemoveFromVisited: IEvent<any> = e => {
    resetSelectAndLastAdded();
    const node: NodeTypes = e.target.nodeName.toLowerCase();
    let countryToRemoveID: string;
    let continentName: ContinentsToShow;

    switch (node) {
      case 'path':
      case 'li':
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

    dispatchFn({
      actionType: 'Remove',
      continentName: continentName,
      continentsState: continentsState,
      country: countryToRemoveID,
      payloadFn: removeCountryFromArray,
    });
    updateVisited(removeCountryFromArray(visitedCountries, countryToRemoveID));
    fillWithColor(countryToRemoveID);
  };

  useEffect(() => {
    const lastItem = [...visitedCountries].pop();
    lastItem !== undefined && setLastAddedCountry(lastItem);
    setCountriesByContinent(continentsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitedCountries]);

  useEffect(() => {
    if (lastAddedCountry !== null) {
      const continentName = getContinentName(lastAddedCountry) as ContinentsToShow;
      dispatchFn({
        actionType: 'Add',
        continentName: continentName,
        continentsState: continentsState,
        country: lastAddedCountry,
        payloadFn: addToContinent,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAddedCountry]);

  const value = {
    allCountries,
    visitedCountries,
    lastAddedCountry,
    selectedCountryCode,
    countriesByContinent,
    updateVisited,
    resetSelectAndLastAdded,
    handleAddToVisited,
    handleRemoveFromVisited,
  };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;

export const VisitedCountryContext = createContext<IContextProps>({
  allCountries: [],
  visitedCountries: [],
  lastAddedCountry: null,
  selectedCountryCode: null,
  countriesByContinent: null,
  updateVisited: () => null,
  resetSelectAndLastAdded: () => null,
  handleAddToVisited: () => null,
  handleRemoveFromVisited: () => null,
});
