import React, { createContext, useState, ReactNode } from "react";
import useFetchCountry from "../hooks/useFetchCountry";

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
  handleAddToVisited: () => null,
});

const VisitedCountryContextProvider = ({ children }: IProps) => {
  const [visitedCountries, setVsitedCountries] = useState<string[]>([]);
  console.log("visitedCountries:", visitedCountries);
  const { allCountries } = useFetchCountry("");
  console.log("allCountries:", allCountries);
  // const findCountryInArray = (countryCode, array) => {
  //   const country = array.find((el) => el.code === countryCode);
  //   return country;
  // };

  const handleAddToVisited: handleAddToVisited = (countryCode) => {
    const country = allCountries.find((el) => el.code === countryCode);

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
