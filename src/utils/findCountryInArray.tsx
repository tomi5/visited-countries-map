export const findCountryInArray = (array: ICountry[], countryCode: string) => {
  const result = array.find((el) => el.code === countryCode);
  return result;
};
