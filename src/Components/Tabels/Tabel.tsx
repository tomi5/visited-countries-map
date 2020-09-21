import React, { ReactElement } from "react";
import CountryItem from "../CountryItem/CountryItem";

import { ListWrapper, ListTitle, List } from "./style";

type TabelProps = {
  continentName: string;
  visitedCountry: ICountry[];
};

const Tabel = ({ continentName, visitedCountry }: TabelProps) => {
  return (
    <ListWrapper>
      <ListTitle>
        {continentName} ({visitedCountry.length})
      </ListTitle>
      <List key={continentName}>
        {visitedCountry.map(
          (country): ReactElement => (
            <CountryItem
              listType="tabel"
              key={country.code}
              country={country}
              continent={continentName}
            />

          )
        )}
      </List></ListWrapper>
  );
};

export default Tabel;
