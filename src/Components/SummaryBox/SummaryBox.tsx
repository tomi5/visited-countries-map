import React from "react";
import useFetchCountry from "../../hooks/useFetchCountry";

type SummaryBoxProps = {
  percentage: number;
  visitedCountries: number;
};

const SummaryBox = () => {
  const { allCountries } = useFetchCountry("");

  return (
    <div>
      <p>{allCountries.length}</p>
      {/* <p>
        You have visited: {visitedCountries}{" "}
        {visitedCountries > 1 ? "countries" : "country"}
      </p>
      <p>This is {percentage} % of the world</p> */}
    </div>
  );
};

export default SummaryBox;
