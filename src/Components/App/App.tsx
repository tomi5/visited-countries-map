import React from "react";
import Header from "../Header/Header";
import SummaryBox from "../SummaryBox/SummaryBox";
import MapContainer from "../MapContainer/MapContainer";
import { Wrapper } from "./style";
import Tabels from "../Tabels/Tabels";
import VisitedCountryContextProvider from "../../contexts/VisitedCountryContext";
import SelectedCountryContextProvider from "../../contexts/SelectedCountryContext";
import SearchContainer from "../SearchContainer/SearchContainer";

const App = () => {
  // const [percentageVisisted, setPercentageVisisted] = useState(0);

  // const addToVisited = (country: ICountry): void => {
  //   if (typeof country.code === "string") {
  //     // check if already visited
  //     const isVisited = visitedCountries.find(
  //       (visited) => visited.code === country.code
  //     );
  //     !isVisited && setvisitedCountries([...visitedCountries, country]);
  //   }
  // };

  // useEffect(() => {
  //   visitedCountries.length > 0 &&
  //     setPercentageVisisted(
  //       (visitedCountries.length * 100) / allCountriesNumber
  //     );
  // }, [allCountriesNumber, visitedCountries]);

  // useEffect(() => {
  //   selectedCountry && fillTheCountryOnMapWithColor(selectedCountry);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedCountry]);

  // const selectCountryFn: IEvent<any> = (e) => {
  //   const countryCode = e.target.dataset.id;
  //   countryCode && setSelectCountry(countryCode);

  //   const COUNTRY_API_URL: string = "https://restcountries.eu/rest/v2";
  //   countryCode &&
  //     fetch(`${COUNTRY_API_URL}/alpha/${countryCode}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const country: ICountry = {
  //           name: data.name,
  //           code: data.alpha2Code,
  //           flag: data.flag,
  //           region: data.region,
  //           subregion: data.subregion,
  //         };

  //         addToVisited(country);
  //       });
  // };

  return (
    <Wrapper>
      <Header title='Interactive Visited Countries Map' />

      <VisitedCountryContextProvider>
        <SelectedCountryContextProvider>
          <MapContainer />
          <SearchContainer />
        </SelectedCountryContextProvider>
        <SummaryBox />
        {/* <Tabels /> */}
      </VisitedCountryContextProvider>
    </Wrapper>
  );
};

export default App;
