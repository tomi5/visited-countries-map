import React, { useContext } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import DeleteContainer from "../Delete/DeleteContainer";
import SimpleAccordion from "./SimpleAccordion";
import { Wrapper } from "./style";

const Accordions = () => {
  const { visitedCountries, countriesByContinent } = useContext(
    VisitedCountryContext
  );

  return (
    <>
      {visitedCountries.length ? (
        <>
          <DeleteContainer action="reset" />
          <Wrapper>
            {countriesByContinent &&
              Object.entries(countriesByContinent).map(
                ([continentName, countries]) => {
                  return countries.length ? (
                    <SimpleAccordion
                      key={continentName}
                      continentName={continentName}
                      visitedCountry={countries}
                    />
                  ) : null;
                }
              )}
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

export default Accordions;
