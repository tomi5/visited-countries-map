import sortBy from 'lodash.sortby';

export const findCountryInArray: MethodsOnArray<string, ICountry | undefined> = (
  arr,
  countryCode
) => {
  const result = arr.find(el => el.code === countryCode);
  return result;
};

export const removeCountryFromArray: MethodsOnArray<string, ICountry[]> = (
  arr,
  countryCode
) => {
  const updatedArr = arr.filter(el => !countryCode.includes(el.code));

  return updatedArr;
};

export const addToContinent: MethodsOnArray<ICountry, ICountry[]> = (
  arr,
  country
) => {
  const isVisted = findCountryInArray(arr, country.code);
  if (!isVisted) {
    arr.push(country);
    arr = sortBy(arr, 'name');
    return arr;
  } else return arr;
};

export const assignSubregionToContinent = (
  country: ICountry
): ContinentsToShow | null => {
  switch (country.subregion as AmericasSubregion) {
    case 'South America':
      return 'America South';
    case 'Northern America':
    case 'Central America':
    case 'Caribbean':
      return 'America North';
    default:
      return null;
  }
};

export const getContinentName = (country: ICountry): ContinentsToShow => {
  switch (country.region as ContinetsFromApi) {
    case 'Polar':
      return (country.region = 'Antarctica');
    case 'Americas':
      return assignSubregionToContinent(country) as ContinentsToShow;
    default:
      return country.region as ContinentsToShow;
  }
};

const defaultColor = 'rgba(158,158,158,0.63)';

export const fillWithColor = (countryCode: string, color = defaultColor) => {
  const pathSVG: NodeListOf<SVGPathElement> = document.querySelectorAll('path');
  countryCode &&
    [...pathSVG].some(
      (el: SVGElement) => el.dataset.id === countryCode && (el.style.fill = color)
    );
};
