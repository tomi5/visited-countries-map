import { useState } from "react";

const useHelpingStates = () => {
  const [lastAddedCountry, setLastAddedCountry] = useState<ICountry | null>(
    null
  );
  const [selectedCountryCode, setSelectCountryCode] = useState<null | string>(
    null
  );
  const [
    countryToRemove,
    setCountryToRemove,
  ] = useState<CountryToRemove | null>(null);

  const resetHelpingStates = () => {
    setSelectCountryCode(null);
    setLastAddedCountry(null);
    setCountryToRemove(null);
  };

  return {
    lastAddedCountry,
    setLastAddedCountry,
    selectedCountryCode,
    setSelectCountryCode,
    countryToRemove,
    setCountryToRemove,
    resetHelpingStates,
  };
};

export default useHelpingStates;
