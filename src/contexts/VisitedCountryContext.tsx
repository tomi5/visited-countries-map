import React, { createContext, useState, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

type handleAddToVisited = {
  (countryCode: string): void;
};

interface IContextProps {
  visitedCountries: string[];
  handleAddToVisited: handleAddToVisited;
}

export const VisitedCountryContext = createContext<IContextProps>({
  visitedCountries: [],
  handleAddToVisited: (e) => null,
});

const VisitedCountryContextProvider = ({ children }: IProps) => {
  const [visitedCountries, setVsitedCountries] = useState<string[]>([]);

  const handleAddToVisited: handleAddToVisited = (countryCode) => {
    const isVisited = visitedCountries.find(
      (visited) => visited === countryCode
    );
    !isVisited && setVsitedCountries([...visitedCountries, countryCode]);
  };

  const value = { visitedCountries, handleAddToVisited };

  return (
    <VisitedCountryContext.Provider value={value}>
      {children}
    </VisitedCountryContext.Provider>
  );
};

export default VisitedCountryContextProvider;
