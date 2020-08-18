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
  console.log("log from app");

  // const [visitedCountries, setvisitedCountries] = useState<ICountry[]>([]);
  // const [selectedCountry, setSelectCountry] = useState<string | null>(null);
  // const [searchValue, setSearchValue] = useState("");

  // const {
  //   state: { error, isLoading, countriesToShow },
  //   allCountriesNumber,
  // } = useFetchCountry(searchValue);

  // const [percentageVisisted, setPercentageVisisted] = useState(0);

  // const fillTheCountryOnMapWithColor = (countryCode: string): void => {
  //   const pathSVG: NodeListOf<SVGPathElement> = document.querySelectorAll(
  //     "path"
  //   );
  //   // find countryCode on Map and fill this country with color
  //   countryCode &&
  //     [...pathSVG].some(
  //       (el: SVGElement) =>
  //         el.dataset.id === countryCode && (el.style.fill = pickedColor)
  //     );
  // };

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

  // const handleSearchInputChanges: IEvent<HTMLInputElement> = (e) => {
  //   const value = e.target.value;
  //   setSearchValue(value);
  // };

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

//  <MapContainer onClick={selectCountryFn} />
//   <ColorPicker pickedColor={pickedColor} onClick={handleColorPicker} />
//   <CountrySearchBar
//     value={searchValue}
//     onChange={handleSearchInputChanges}
//   />
//   <div>
//     {error && <p>{error}</p>}
//     {isLoading && <p>Loading...</p>}
//     {!isLoading && !error && countriesToShow.length ? (
//       <ul>
//         {countriesToShow.map(
//           (country: ICountry): ReactElement => (
//             <SearchResult
//               key={country.code}
//               country={country}
//               onClick={selectCountryFn}
//             />
//           )
//         )}
//       </ul>
//     ) : null}
//   </div>
//   <SummaryBox
//     percentage={percentageVisisted}
//     visitedCountries={visitedCountries.length}
//   />
//   <Tabels visitedCountries={visitedCountries} />
