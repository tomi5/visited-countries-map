import React, { createContext, useState, ReactNode } from "react";
import { findCountryInArray } from "../utils/findCountryInArray";

type IProps = {
  children: ReactNode;
};

type handleAddToVisited = {
  (countryCode: string, allCountries: ICountry[]): void;
};

interface IContextProps {
  visitedCountries: ICountry[];
  handleAddToVisited: handleAddToVisited;
}

export const VisitedCountryContext = createContext<IContextProps>({
  visitedCountries: [],
  handleAddToVisited: () => null,
});

const VisitedCountryContextProvider = ({ children }: IProps) => {
  const [visitedCountries, setVsitedCountries] = useState<ICountry[]>([]);

  const handleAddToVisited: handleAddToVisited = (
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
