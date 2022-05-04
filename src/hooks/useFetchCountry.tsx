import { useState, useEffect } from "react";

const COUNTRY_API_URL = "https://restcountries.com/v2";

const initialFetchState: IFetchState = {
  error: null,
  isLoading: false,
};

const useFetchCountry = (searchValue: string) => {
  const [fetchState, setFetchState] = useState(initialFetchState);
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);
  const [allCountries, setAllCountries] = useState<ICountry[]>([]);

  const fetchData = async (query?: string) => {
    const param = query ? `name/${query}` : `all`;

    setFetchState({
      ...initialFetchState,
      isLoading: true,
    });
    try {
      const response = await fetch(`${COUNTRY_API_URL}/${param}`);
      const data = await response.json();

      if (response.ok) {
        const result = data.map((el: any) => {
          const country: ICountry = {
            name: el.name,
            code: el.alpha2Code,
            flag: el.flag,
            region: el.region,
            subregion: el.subregion,
          };
          return country;
        });
        setFetchState(initialFetchState);
        query ? setCountriesToShow(result) : setAllCountries(result);
      } else {
        setFetchState({
          ...initialFetchState,
          error: "No countries found...",
        });
      }
    } catch (err) {
      setFetchState({
        ...initialFetchState,
        error: "something went wrong with the database, please try again later",
      });
    }
  };

  // fetch all countries only after first render
  useEffect(() => {
    fetchData();
  }, []);

  // fetch country after input search value change
  useEffect(() => {
    if (searchValue.length > 1) {
      fetchData(searchValue);
    } else {
      setFetchState(initialFetchState);
      setCountriesToShow([]);
    }
  }, [searchValue]);

  return { fetchState, allCountries, countriesToShow };
};

export default useFetchCountry;
