import { useState, useEffect } from 'react';

const COUNTRY_API_URL: string = 'https://restcountries.eu/rest/v2';

const initialState: IFetchState = {
  error: null,
  isLoading: false,
};

const useFetchCountry = (searchValue: string) => {
  const [state, setState] = useState(initialState);
  const [countriesToShow, setCountriesToShow] = useState<ICountry[]>([]);
  const [allCountries, setAllCountries] = useState<ICountry[]>([]);

  const fetchData = async (query?: string) => {
    const param = query ? `name/${query}` : `all`;

    setState({
      ...initialState,
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
        setState(initialState);
        query ? setCountriesToShow(result) : setAllCountries(result);
      } else {
        setState({
          ...initialState,
          error: 'No countries found...',
        });
      }
    } catch (err) {
      console.log('err:', err);
      setState({
        ...initialState,
        error: 'something went wrong with the database, please try again later',
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
      setState(initialState);
      setCountriesToShow([]);
    }
  }, [searchValue]);

  return { state, allCountries, countriesToShow };
};

export default useFetchCountry;
