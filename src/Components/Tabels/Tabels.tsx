import React, { useContext } from "react";
import { VisitedCountryContext } from "../../contexts/VisitedCountryContext";

const Tabels = () => {
  const { visitedCountries } = useContext(VisitedCountryContext);
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
