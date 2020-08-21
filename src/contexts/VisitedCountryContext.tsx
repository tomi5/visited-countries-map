import React, { createContext, useState, ReactNode } from "react";
import { findCountryInArray } from "../utils/findCountryInArray";

interface IContextProps {
  visitedCountries: ICountry[];
  handleAddToVisited: HandleAddToVisited;
}
type Props = {
  children: ReactNode;
};

export const VisitedCountryContext = createContext<IContextProps>({
  visitedCountries: [],
  handleAddToVisited: () => null,
});

const VisitedCountryContextProvider = ({ children }: Props) => {
  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);

  const handleAddToVisited: HandleAddToVisited = (
    countryCode,
    allCountries
  ) => {
    const countryDetails = findCountryInArray(allCountries, countryCode);
    const isVisited = findCountryInArray(visitedCountries, countryCode);

    if (countryDetails !== undefined) {
      !isVisited && setVsitedCountries([...visitedCountries, countryDetails]);
    }
  };

  const value = { visitedCountries, handleAddToVisited };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;
