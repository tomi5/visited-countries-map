import React, { createContext, useState, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IContextProps {
  selectedCountry: string | null;
  handleSelectCountry: IEvent<any>;
}

export const SelectedCountryContext = createContext<IContextProps>({
  selectedCountry: null,
  handleSelectCountry: (e) => null,
});

const SelectedCountryContextProvider = ({ children }: IProps) => {
  console.log("  CountryContextProvider");

  const [selectedCountry, setSelectCountry] = useState(null);

  const handleSelectCountry = (e) => {
    // const countryName = e.target
    const country = e.target.textContent;
    setSelectCountry(country);
  };

  const value = { selectedCountry, handleSelectCountry };

  return (
    <SelectedCountryContext.Provider value={value}>
      {children}
    </SelectedCountryContext.Provider>
  );
};

export default SelectedCountryContextProvider;
