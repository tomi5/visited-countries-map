import React from "react";

type TabelsProps = {
  visitedCountries: ICountry[];
};

const Tabels = ({ visitedCountries }: TabelsProps) => {
  console.log("log z tables");
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
