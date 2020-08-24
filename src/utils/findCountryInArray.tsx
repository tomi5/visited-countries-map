export const findCountryInArray = (arr: ICountry[], countryCode: string) => {
  const result = arr.find((el) => el.code === countryCode);
  return result;
};

export const removeCountryFromArray = (
  arr: ICountry[],
  countryCode: string
) => {
  const updatedArr = arr.filter((el) => !countryCode.includes(el.code));
  return updatedArr;
};
