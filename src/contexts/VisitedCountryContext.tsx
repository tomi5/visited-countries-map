import React, { createContext, useState, ReactNode, useEffect } from "react";
import { findCountryInArray } from "../utils/findCountryInArray";

interface IContextProps {
  visitedCountries: ICountry[];
  lastAddedCountry: ICountry | null;
  handleAddToVisited: HandleAddToVisited;
  updateVisited: UpdateVisited;
  selectedCountryCode: string | null;
  resetSelectedCountry: () => void;
  resetLastAddedCountry: () => void;
}
type Props = {
  children: ReactNode;
};

export const VisitedCountryContext = createContext<IContextProps>({
  visitedCountries: [],
  lastAddedCountry: null,
  handleAddToVisited: () => null,
  updateVisited: () => null,
  selectedCountryCode: null,
  resetSelectedCountry: () => null,
  resetLastAddedCountry: () => null,
});

const VisitedCountryContextProvider = ({ children }: Props) => {
  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);
  const [selectedCountryCode, setSelectCountryCode] = useState<null | string>(
    null
  );
  const [lastAddedCountry, setLastAddedCountry] = useState<ICountry | null>(
    null
  );

  useEffect(() => {
    const lastItem = [...visitedCountries].pop();
    lastItem !== undefined && setLastAddedCountry(lastItem);
  }, [visitedCountries]);

  const handleAddToVisited: HandleAddToVisited = (e, allCountries) => {
    const countryCode = e.target.dataset.id;
    countryCode && setSelectCountryCode(countryCode);
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);

    if (countryDetails !== undefined && !isVisited) {
      setVsitedCountries([...visitedCountries, countryDetails]);
    }
  };

  const resetSelectedCountry = () => setSelectCountryCode(null);
  const resetLastAddedCountry = () => setLastAddedCountry(null);

  const updateVisited: UpdateVisited = (arr) => {
    setVsitedCountries(arr);
  };

  const value = {
    visitedCountries,
    lastAddedCountry,
    handleAddToVisited,
    updateVisited,
    selectedCountryCode,
    resetSelectedCountry,
    resetLastAddedCountry,
  };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;
