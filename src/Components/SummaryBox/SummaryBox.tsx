import React, { useContext, useEffect, useState } from "react";
import { VisitedCountryContext } from "../../contexts/VisitedCountryContext";

type SummaryBoxProps = {
  allCountries: ICountry[];
};

const SummaryBox = ({ allCountries }: SummaryBoxProps) => {
  const { visitedCountries } = useContext(VisitedCountryContext);
  const [percentageVisisted, setPercentageVisisted] = useState(0);

  useEffect(() => {
    visitedCountries.length > 0 &&
      setPercentageVisisted(
        (visitedCountries.length * 100) / allCountries.length
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
