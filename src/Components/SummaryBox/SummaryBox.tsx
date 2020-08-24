import React, { useContext, useEffect, useState } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";

type SummaryBoxProps = {
  allCountries: ICountry[];
};

const setPercentage = (divident: ICountry[], divisor: ICountry[]) => {
  if (!divident.length) {
    return 0;
  } else {
    const result = (divident.length * 100) / divisor.length;
    return result;
  }
};

const SummaryBox = ({ allCountries }: SummaryBoxProps) => {
  const { visitedCountries } = useContext(VisitedCountryContext);
  const [percentageVisisted, setPercentageVisisted] = useState(0);

  useEffect(() => {
    setPercentageVisisted(setPercentage(visitedCountries, allCountries));
  }, [allCountries, visitedCountries]);

  return (
    <div>
      <p>
        You have visited: {visitedCountries.length}{" "}
        {visitedCountries.length > 1 ? "countries" : "country"}
      </p>
      <p>This is {percentageVisisted} % of the world</p>
    </div>
  );
};

export default SummaryBox;
