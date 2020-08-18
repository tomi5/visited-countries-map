import React, { createContext, useState, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IContextProps {
  selectedCountryCode: string | null;
  handleSelectCountry: IEvent<any>;
  resetSelectedCountry: () => void;
}

export const SelectedCountryContext = createContext<IContextProps>({
  selectedCountryCode: null,
  handleSelectCountry: () => null,
  resetSelectedCountry: () => null,
});

const SelectedCountryContextProvider = ({ children }: IProps) => {
  const [selectedCountryCode, setSelectCountryCode] = useState<null | string>(
    null
  );

  console.log(selectedCountryCode);

  const handleSelectCountry: IEvent<any> = (e) => {
    const countryCode = e.target.dataset.id;
    countryCode && setSelectCountryCode(countryCode);
  };

  const resetSelectedCountry = () => setSelectCountryCode(null);

  const value = {
    selectedCountryCode,
    handleSelectCountry,
    resetSelectedCountry,
  };

  return (
    <SelectedCountryContext.Provider value={value}>
      {children}
    </SelectedCountryContext.Provider>
  );
};

export default SelectedCountryContextProvider;
