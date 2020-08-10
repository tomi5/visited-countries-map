import React, { useState, useEffect, ReactElement } from "react";
import Header from "../Header/Header";
import MapContainer from "../MapContainer/MapContainer";
import ColorPicker from "../ColorPicker/ColorPicker";
import CountrySearchBar from "../CountrySearchBar/CountrySearchBar";
import SearchResult from "../CountrySearchBar/SearchResult/SearchResult";
import { useFetch } from "./hooks/useFetch";
import { Wrapper } from "./style";

const App = () => {
  const [visitedCountry, setvisitedCountry] = useState<string[]>([]);

  const [pickedColor, setPickedColor] = useState("#428C08");

  const [searchValue, setSearchValue] = useState("");

  const { error, isLoading, countries } = useFetch(searchValue);

  useEffect(() => {
    const path: NodeListOf<SVGPathElement> = document.querySelectorAll("path");
    const selectedCountry = [...visitedCountry].pop();
    [...path].some(
      (el: SVGElement) =>
        el.dataset.id === selectedCountry && (el.style.fill = pickedColor)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visitedCountry]);

  const handleSearchInputChanges: IEvent<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleColorPicker: IEvent<any> = (e) => {
    setPickedColor(e.target.dataset.color);
  };

  const selectCountryFn: IEvent<any> = (e) => {
    const countryCode: string = e.target.dataset.id;
    setvisitedCountry([...visitedCountry, countryCode]);
  };

  const SearchComponent = (): JSX.Element => {
    return (
      <div>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && !error && countries.length
          ? countries.map(
              (country: any): ReactElement => (
                <SearchResult
                  key={country.alpha2Code}
                  {...country}
                  onClick={selectCountryFn}
                />
              )
            )
          : null}
      </div>
    );
  };

  return (
    <Wrapper>
      <Header title='Interactive Visited Countries Map' />
      <MapContainer onClick={selectCountryFn} />
      <ColorPicker pickedColor={pickedColor} onClick={handleColorPicker} />
      <CountrySearchBar
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <SearchComponent />
    </Wrapper>
  );
};

export default App;
