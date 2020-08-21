import React from "react";
import DeleteButton from "../Buttons/DeleteButton";

type TabelProps = {
  continentName: string;
  visitedCountry: ICountry[];
};

const Tabel = ({ continentName, visitedCountry }: TabelProps) => {
  return (
    <ul>
      <h1>{continentName === "Polar" ? "Ant" : continentName}</h1>
      {visitedCountry.map(
        (country: ICountry): JSX.Element => (
          <li key={country.code}>
            <img
              src={country.flag}
              alt={`flag of ${country.name}`}
              style={{ width: "auto", height: "20px" }}
            />
            {country.name}
            <DeleteButton />
          </li>
        )
      )}
    </ul>
  );
};

export default Tabel;
