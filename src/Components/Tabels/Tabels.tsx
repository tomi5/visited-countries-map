import React, { useContext } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Tabel from "./Tabel";
import DeleteContainer from "../Delete/DeleteContainer";
import { Wrapper } from "./style";

const Tabels = () => {
  const { visitedCountries, countriesByContinent } = useContext(
    VisitedCountryContext
  );

  return (
    <>
      {visitedCountries.length ? (
        <Wrapper>
          <DeleteContainer action="reset" />

          {countriesByContinent &&
            Object.entries(countriesByContinent).map(
              ([continentName, countries]) => {
                return countries.length ? (
                  <Tabel
                    key={continentName}
                    continentName={continentName}
                    visitedCountry={countries}
                  />
                ) : null;
              }
            )}
        </Wrapper>
      ) : null}
    </>
  );
};

export default Tabels;
