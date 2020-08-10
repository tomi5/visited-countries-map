import { useState, useEffect } from "react";

const COUNTRY_API_URL: string = "https://restcountries.eu/rest/v2/name/";

export const useFetch = (searchValue: string) => {
  const [state, setState] = useState<IHooksState>({
    error: null,
    isLoading: false,
    countries: [],
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      error: null,
      isLoading: true,
    }));

    searchValue.length > 2 &&
      fetch(COUNTRY_API_URL + searchValue)
        .then((res) => res.json())
        .then((data) => {
          // catch error if the country entered was not found
          if (data.status === 404) {
            setState({
              error: data.message,
              isLoading: false,
              countries: [],
            });
            // if ok fetch data
          } else {
            setState((prevState) => ({
              ...prevState,
              isLoading: false,
              countries: data,
            }));
          }
        }) // catch other error
        .catch((err) => {
          setState((prevState) => ({
            ...prevState,
            isLoading: false,
            error: err.toString(),
          }));
        });

    searchValue != null &&
      searchValue.length < 3 &&
      setState({
        error: null,
        isLoading: false,
        countries: [],
      });
  }, [searchValue]);

  return state;
};
