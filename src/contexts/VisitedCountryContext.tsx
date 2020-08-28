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
    dispatchfn,
  } = object;
  dispatchfn({
    type,
    continent,
    payload: payloadFn(continentsState[continent], country),
  });
};

const updateVisitedAfterRemove = (obj: updateVisitedAfterRemove) => {
  const { arrToUpdate, countryToRemoveID, setStateFn } = obj;
  const updatedArr = removeCountryFromArray(arrToUpdate, countryToRemoveID);
  setStateFn(updatedArr);
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

  const [countryToRemove, setCountryToRemove] = useState<CountryToRemove | null>(
    null
  );
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    const lastItem = [...visitedCountries].pop();
    if (!lastItem) return;
    setLastAddedCountry(lastItem);
  }, [visitedCountries]);

  useEffect(() => {
    setCountriesByContinent(continentsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitedCountries]);

  // ADD LAST ADDED COUNTRY TO RELEVANT TABLE BY CONTINENT
  useEffect(() => {
    if (!lastAddedCountry) return;
    const continentName = getContinentName(lastAddedCountry) as ContinentsToShow;
    const dispatchObj: IDispatchObj = {
      type: 'Add',
      continent: continentName,
      continentsState: continentsState,
      country: lastAddedCountry,
      payloadFn: addToContinent,
      dispatchfn: dispatch,
    };
    dispatchFn(dispatchObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastAddedCountry]);

  const handleAddToVisited: IEvent<any> = e => {
    const countryCode = e.target.dataset.id;
    countryCode && setSelectCountryCode(countryCode);
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);
    if (!countryDetails) return;
    !isVisited && setVsitedCountries([...visitedCountries, countryDetails]);
  };

  const handleToggleModal = () => setIsModalActive(state => !state);

  const resetSelectedAndLastAdded = () => {
    setSelectCountryCode(null);
    setLastAddedCountry(null);
  };

  const handleConfirmRemoveFromVisited = (countryToRemove: any) => {
    const { continentName, countryToRemoveID } = countryToRemove;
    resetSelectedAndLastAdded();

    const dispatchObj: IDispatchObj = {
      type: 'Remove',
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
  };

  const handleWantToRemoveFromVisited: IEvent<any> = e => {
    handleToggleModal();

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
    isModalActive,
    handleAddToVisited,
    handleToggleModal,
    resetSelectedAndLastAdded,
    handleWantToRemoveFromVisited,
    handleConfirmRemoveFromVisited,
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
  isModalActive: boolean;
  handleAddToVisited: IEvent<any>;
  handleToggleModal: () => void;
  resetSelectedAndLastAdded: () => void;
  handleWantToRemoveFromVisited: (e: any) => void;
  handleConfirmRemoveFromVisited: (refContainer: any) => void;
}

export const VisitedCountryContext = createContext<IContextProps>({
  allCountries: [],
  visitedCountries: [],
  selectedCountryCode: null,
  countriesByContinent: null,
  countryToRemove: null,
  isModalActive: false,
  handleAddToVisited: () => null,
  handleToggleModal: () => null,
  resetSelectedAndLastAdded: () => null,
  handleWantToRemoveFromVisited: () => null,
  handleConfirmRemoveFromVisited: () => null,
});
