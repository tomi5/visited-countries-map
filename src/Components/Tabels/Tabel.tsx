import React, { ReactNode } from "react";
import DeleteButton from "../Buttons/DeleteButton";
import CountryItem from "../CountryItem/CountryItem";

type TabelProps = {
  continentName: string;
  visitedCountry: ICountry[];
};

const Tabel = ({ continentName, visitedCountry }: TabelProps) => {
  return (
    <ul>
      <h1>{continentName}</h1>
      {visitedCountry.map(
        (country): ReactNode => (
          <CountryItem country={country}>
            <DeleteButton />
          </CountryItem>
        )
      )}
    </ul>
  );
};

export default Tabel;
