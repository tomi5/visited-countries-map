import { useState, useEffect } from "react";

const COUNTRY_API_URL: string = "https://restcountries.eu/rest/v2";

const initialState: IFetchState = {
  error: null,
  isLoading: false,
};

const useFetchCountry = (searchValue: string) => {
  const [state, setState] = useState(initialState);
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);
  const [allCountries, setAllCountries] = useState<ICountry[]>([]);

  const fetchData = async (querry?: string) => {
    const param = querry ? `name/${querry}` : "all";

    setState({
      ...initialState,
      isLoading: true,
    });
    try {
      const response = await fetch(`${COUNTRY_API_URL}/${param}`);
      const data = await response.json();
      console.log("data:", data);
      if (data.status === 404) {
        setState({
          ...initialState,
          error: "No countries found...",
        });
      } else {
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
        setState(initialState);
        querry ? setCountriesToShow(result) : setAllCountries(result);
      }
    } catch (err) {
      setState({
        ...initialState,
        error: "No countries found...",
      });
    }
  };

  // fetch all countries only after first render
  useEffect(() => {
    fetchData();
  }, []);

  // fetch country after input search value change
  useEffect(() => {
    if (searchValue.length > 2) {
      fetchData(searchValue);
    } else {
      setCountriesToShow([]);
    }
  }, [searchValue]);

  return { state, allCountries, countriesToShow };
};

export default useFetchCountry;
