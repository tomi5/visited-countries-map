import sortBy from "lodash.sortby";
import { findCountryInArray } from "./findCountryInArray";

export const getContinentName = (country: ICountry): ContinentsToShow => {
  switch (country.region as ContinetsFromApi) {
    case "Polar":
      return (country.region = "Antarctica");
    case "Americas":
      return assignSubregionToContinent(country) as ContinentsToShow;
    default:
      return country.region as ContinentsToShow;
  }
};

export const assignSubregionToContinent = (
  country: ICountry
): ContinentsToShow | null => {
  switch (country.subregion as AmericasSubregion) {
    case "South America":
      return "America South";
    case "Northern America":
    case "Central America":
    case "Caribbean":
      return "America North";
    default:
      return null;
  }
};

export const addToContinent = (
  arr: ICountry[],
  country: ICountry
): ICountry[] | null => {
  const isVisted = findCountryInArray(arr, country.code);
  if (!isVisted) {
    arr.push(country);
    arr = sortBy(arr, "name");
    return arr;
  } else return arr;
};
