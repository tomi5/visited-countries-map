import React, { createContext, useState, ReactNode } from "react";
import { findCountryInArray } from "../utils/findCountryInArray";

interface IContextProps {
  visitedCountries: ICountry[];
  handleAddToVisited: HandleAddToVisited;
  updateVisited: UpdateVisited;
}
type Props = {
  children: ReactNode;
};

export const VisitedCountryContext = createContext<IContextProps>({
  visitedCountries: [],
  handleAddToVisited: () => null,
  updateVisited: () => null,
});

const VisitedCountryContextProvider = ({ children }: Props) => {
  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);

  const handleAddToVisited: HandleAddToVisited = (
    countryCode,
    allCountries
  ) => {
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);

    if (countryDetails !== undefined && !isVisited) {
      setVsitedCountries([...visitedCountries, countryDetails]);
    }
  };

  const updateVisited: UpdateVisited = (arr) => {
    setVsitedCountries(arr);
  };

  const value = {
    visitedCountries,
    handleAddToVisited,
    updateVisited,
  };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;
