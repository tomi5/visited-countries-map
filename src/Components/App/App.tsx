import React from "react";
import ThemeProvider from "../../contexts/themeContext";
import GlobalStyle from "../../theme/global";
import { Wrapper } from "./style";
import AppBar from "../AppBar/AppBar";
import VisitedCountryContextProvider from "../../contexts/visitedCountryContext";
import MapContainer from "../MapContainer/MapContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import SummaryBox from "../SummaryBox/SummaryBox";
import Tabels from "../Tabels/Tabels";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Wrapper>
        <AppBar />
        <VisitedCountryContextProvider>
          <main>
            <MapContainer />
            <SearchContainer />
            <SummaryBox />
            <Tabels />
          </main>
        </VisitedCountryContextProvider>
      </Wrapper>
    </ThemeProvider>
  );
};
export default App;
