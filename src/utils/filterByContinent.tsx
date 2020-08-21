import sortBy from "lodash.sortby";

export const filterByContinent: FilrerByContinent = (countries, continent) => {
  const filteredList = countries.filter(
    (country) => country.region === continent
  );
  const sortedList = sortBy(filteredList, "name");
  return sortedList;
};
