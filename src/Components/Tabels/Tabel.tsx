import React, { ReactElement } from "react";
import CountryItem from "../CountryItem/CountryItem";

import { List } from "./style";

type TabelProps = {
  continentName: string;
  visitedCountry: ICountry[];
};

const Tabel = ({ continentName, visitedCountry }: TabelProps) => {
  return (
    <List key={continentName}>
      <h2>
        {continentName} ({visitedCountry.length})
      </h2>
      {visitedCountry.map(
        (country): ReactElement => (
          <CountryItem
            key={country.code}
            country={country}
            continent={continentName}
          />

        )
      )}
    </List>
  );
};

export default Tabel;
