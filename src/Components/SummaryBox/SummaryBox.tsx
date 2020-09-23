import React, { useContext, useEffect, useState } from "react";
import { setPercentage } from "../../utils/utils";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import { Wrapper, StyledSpan } from "./style";

const SummaryBox = () => {
  const { visitedCountries, allCountries } = useContext(VisitedCountryContext);
  const [percentageVisisted, setPercentageVisisted] = useState(0);

  useEffect(() => {
    setPercentageVisisted(setPercentage(visitedCountries, allCountries));
  }, [allCountries, visitedCountries]);

  return (
    <Wrapper>
      <p>
        You have visited:{" "}
        <StyledSpan key={visitedCountries.length}>
          {visitedCountries.length}
        </StyledSpan>{" "}
        {visitedCountries.length > 1 ? "countries" : "country"}
      </p>
      <p>
        This is{" "}
        <StyledSpan key={percentageVisisted}>
          {percentageVisisted ? percentageVisisted : 0} %
        </StyledSpan>{" "}
        of the world
      </p>
    </Wrapper>
  );
};

export default SummaryBox;
