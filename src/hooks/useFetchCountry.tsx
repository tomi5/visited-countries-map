/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const COUNTRY_API_URL: string = "https://restcountries.eu/rest/v2";

const initialState: IFetchState = {
  error: null,
  isLoading: false,
  countriesToShow: [],
};

const useFetchCountry = (searchValue: string) => {
  const [state, setState] = useState(initialState);
  const [allCountriesNumber, setAllCountriesNumber] = useState(0);

  const fetchData = async () => {
    let response = await fetch(`${COUNTRY_API_URL}/all`);
    let responseData = await response.json();
    setAllCountriesNumber(responseData.length);
  };

  // fetch Total number of countries in the World
  useEffect(() => {
    console.log("Test");

    fetchData();
    // fetch(`${COUNTRY_API_URL}/all`)
    //   .then((res) => res.json())
    //   .then((data) => setAllCountriesNumber(data.length))
    //   .catch((err) => {
    //     setState({
    //       ...initialState,
    //       error: err.toString(),
    //     });
    //   });
  }, []);

  // fetch country to show using search input
  useEffect(() => {
    if (searchValue.length > 2) {
      setState({
        ...initialState,
        isLoading: true,
      });
      fetch(`${COUNTRY_API_URL}/name/${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          // catch error if the country entered was not found
          if (data.status === 404) {
            setState({
              ...initialState,
              error: "No countries found...",
            });
          }
          // if ok fetch data
          else {
            const results: ICountry[] = [];
            data.map((el: any) => {
              const country: ICountry = {
                name: el.name,
                code: el.alpha2Code,
                flag: el.flag,
                region: el.region,
                subregion: el.subregion,
              };
              return results.push(country);
            });

            setState({
              ...initialState,
              countriesToShow: results,
            });
          }
        }) // catch other error
        .catch((err) => {
          setState({
            ...initialState,
            error: "No countries found...",
          });
          throw new Error(err.toString());
        });
    } else setState(initialState);
  }, [searchValue]);

  return { state, allCountriesNumber };
};

export default useFetchCountry;
