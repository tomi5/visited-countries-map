interface IEvent<T> {
  (e: { target: T }): void;
}

type CountryFeatures = "name" | "code" | "flag" | "region" | "subregion";

type ICountry = {
  [key in CountryFeatures]: string;
};

interface IFetchState {
  error: string | null;
  isLoading: boolean;
}

interface ICreateContext {
  visitedCountries: ICountry[];
  selectedCountry: string | null;
  searchValue: string;
  percentageVisisted: number;
  pickedColor: string;
  handleColorPicker: any; // FIXME - fix "any" type
  selectCountryFn: any; // FIXME - fix "any" type
  handleSearchInputChanges: any; // FIXME - fix "any" type
}

type HandleAddToVisited = {
  (countryCode: string, allCountries: ICountry[]): void;
};

type ContinentsToShow =
  | "Africa"
  | "Antarctica"
  | "America North"
  | "America South"
  | "Asia"
  | "Europe"
  | "Oceania";

type AmericasSubregion =
  | "Caribbean"
  | "Central America"
  | "Northern America"
  | "South America";

type ContinetsFromApi =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "Polar";

type ContinentsInitialState = {
  [key in ContinentsToShow]: ICountry[];
};
