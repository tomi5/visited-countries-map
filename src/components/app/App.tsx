import React from "react";
import ThemeProvider from "../../contexts/themeContext";
import GlobalStyle from "../../theme/global";
import { Wrapper, Main } from "./style";
import AppBar from "../appBar/AppBar";
import VisitedCountryContextProvider from "../../contexts/visitedCountryContext";
import MapContainer from "../mapContainer/MapContainer";
import SearchContainer from "../searchContainer/SearchContainer";
import SummaryBox from "../summaryBox/SummaryBox";
import Accordions from "../accordions/Accordions";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppBar />
      <Wrapper>
        <VisitedCountryContextProvider>
          <Main>
            <SearchContainer />
            <SummaryBox />
            <MapContainer />
            <Accordions />
          </Main>
        </VisitedCountryContextProvider>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
