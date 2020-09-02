import React, { useContext, useEffect, useState } from 'react';
import { setPercentage } from '../../utils/utils';
import { VisitedCountryContext } from '../../contexts/VisitedCountryContext';

const SummaryBox = () => {
  const { visitedCountries, allCountries } = useContext(VisitedCountryContext);
  const [percentageVisisted, setPercentageVisisted] = useState(0);

  useEffect(() => {
    setPercentageVisisted(setPercentage(visitedCountries, allCountries));
  }, [allCountries, visitedCountries]);

  return (
    <>
      <p>
        You have visited: {visitedCountries.length}{' '}
        {visitedCountries.length > 1 ? 'countries' : 'country'}
      </p>
      <p>This is {percentageVisisted ? percentageVisisted : 0} % of the world</p>
    </>
  );
};

export default SummaryBox;
