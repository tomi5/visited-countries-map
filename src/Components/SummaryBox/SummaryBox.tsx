import React from "react";

type SummaryBoxProps = {
  percentage: number;
  visitedCountries: number;
};

const SummaryBox = ({ percentage, visitedCountries }: SummaryBoxProps) => {
  return (
    <div>
      <p>
        You have visited: {visitedCountries}{" "}
        {visitedCountries > 1 ? "countries" : "country"}
      </p>
      <p>This is {percentage} % of the world</p>
    </div>
  );
};

export default SummaryBox;
