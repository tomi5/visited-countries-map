import React, { useContext } from "react";
import { VisitedCountryContext } from "../../contexts/visitedCountryContext";
import Tabel from "./Tabel";
import DeleteContainer from "../Delete/DeleteContainer";

const Tabels = () => {
  const { visitedCountries, countriesByContinent } = useContext(
    VisitedCountryContext
  );

  return (
    <>
      {visitedCountries.length ? <DeleteContainer action={"reset"} /> : null}
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
    </>
  );
};

export default Tabels;
