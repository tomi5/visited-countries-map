import React, { useContext } from "react";
import { VisitedCountryContext } from "../../contexts/VisitedCountryContext";

const Tabels = () => {
  const { visitedCountries } = useContext(VisitedCountryContext);
  console.log("visitedCountries:", visitedCountries);
  return (
    <ul>
      {visitedCountries.map(
        (country): JSX.Element => (
          <li key={country.code}>
            <img
              src={country.flag}
              alt={`flag of ${country.name}`}
              style={{ width: "auto", height: "20px" }}
            />
            {country.name}
          </li>
        )
      )}
    </ul>
  );
};

export default Tabels;

/*
Africa => AFRICA
Americas:
    - South America  => SOUTH AMERICA
    - Northern America => NORTH AMERICA
    - Central America =>
    - Caribbean
Asia  => ASIA
Europe  => EUROPE
Oceania   => OCEANIA
Polar => ANTARTICA
"" => ANTARTICA
*/
