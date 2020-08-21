import React, { createContext, useState, ReactNode } from "react";

interface IContextProps {
  selectedCountryCode: string | null;
  handleSelectCountry: IEvent<any>;
  resetSelectedCountry: () => void;
}
type Props = {
  children: ReactNode;
};

export const SelectedCountryContext = createContext<IContextProps>({
  selectedCountryCode: null,
  handleSelectCountry: () => null,
  resetSelectedCountry: () => null,
});

const SelectedCountryContextProvider = ({ children }: Props) => {
  const [selectedCountryCode, setSelectCountryCode] = useState<null | string>(
    null
  );
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
