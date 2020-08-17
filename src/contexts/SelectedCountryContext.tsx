import React, { createContext, useState, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IContextProps {
  selectedCountryCode: string | null;
  handleSelectCountry: IEvent<any>;
}

export const SelectedCountryContext = createContext<IContextProps>({
  selectedCountryCode: null,
  handleSelectCountry: (e) => null,
});

const SelectedCountryContextProvider = ({ children }: IProps) => {
  const [selectedCountryCode, setSelectCountryCode] = useState(null);

  const handleSelectCountry: IEvent<any> = (e) => {
    // const countryName = e.target
    const countryCode = e.target.dataset.id;
    setSelectCountryCode(countryCode);
  };

  const value = { selectedCountryCode, handleSelectCountry };

  return (
    <SelectedCountryContext.Provider value={value}>
      {children}
    </SelectedCountryContext.Provider>
  );
};

export default SelectedCountryContextProvider;
